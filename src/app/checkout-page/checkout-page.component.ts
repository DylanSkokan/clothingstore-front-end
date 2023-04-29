import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { Subject, takeUntil } from 'rxjs';
import { Product } from '../model/product';

interface Cart {
  products: Product[];
  totalCost: number;
}



@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit{
  private unsubscribe = new Subject<void>();
  cart: Cart = { products: [], totalCost: 0 };
  public totalItems : number = 0;

  constructor(private cartService : CartService){}

  ngOnInit(): void {
    this.cart = this.cartService.getCart()
    this.cartService.getCartUpdated()
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(() => {
      this.totalItems = this.cartService.getCartSize();
    });

  }

}
