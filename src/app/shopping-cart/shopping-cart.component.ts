/**
 * Shopping cart page. Utilizes the shopping cart service.
 *
 * @author Dylan Skokan, Isaiah Cuellar, Tom Waterman, Justin Pham, Kyle McClernon
 */
import { Subject, takeUntil } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';

import { Component, OnInit } from '@angular/core';

import { Product } from '../model/product';

interface Cart {
  products: Product[];
  totalCost: number;
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {
  private unsubscribe = new Subject<void>();
  cart: Cart = { products: [], totalCost: 0 };

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart()
    this.cartService.getCartUpdated()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => {
        this.cart = this.cartService.getCart();
      });
  }

  removeItem(item: Product) {
    this.cartService.removeCartItem(item);
  }

  emptyCart() {
    this.cartService.removeAllItems();
  }
}
