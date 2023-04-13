import { Component, OnInit } from '@angular/core';
import { } from '@fortawesome/angular-fontawesome';

import { CartService } from 'src/app/service/cart.service';

import { Product } from '../model/product';
import { Subject, takeUntil } from 'rxjs';

interface Cart {
  products: Product[];
  totalCost: number;
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit{
  //cart: Product []
  private unsubscribe = new Subject<void>();
  cart: Cart = { products: [], totalCost: 0 };


/*
  constructor(
    private shoppingcartService: ShoppingcartService) { 
      
    }
  ngOnInit(): void {
    this.cart = this.shoppingcartService.getCart()
  }

  public products : Product = [];
  public grandTotal !: number;
*/ 


  constructor(private cartService: CartService){}

  ngOnInit(): void {
      this.cart = this.cartService.getCart()
      //this.products = res;
      //this.grandTotal = this.cartService.getTotalPrice();

      this.cartService.getCartUpdated()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => {
        this.cart = this.cartService.getCart();
      });

  }

  removeItem(item : Product){
    this.cartService.removeCartItem(item);
  }

  emptyCart(){
    this.cartService.removeAllItems();
  }
}
