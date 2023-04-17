import { Injectable } from '@angular/core';
import { Pants } from '../model/pants';
import { Hat } from '../model/hat';
import { Shirt } from '../model/shirt';
import { Shoe } from '../model/shoe';
import { SessionService } from './session.service';

type Product = Pants | Shirt | Hat | Shoe;

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {
  private cart: Product[] = [];

  constructor(private sessionService: SessionService) { }

  addToCart(product: Product) {

    if (this.cart.includes(product)) {
      
    }
      else {
    this.cart.push(product);
    this.sessionService.setItem('cart', this.cart);
      }
  }

  removeFromCart(product: Product) {
    const index = this.cart.indexOf(product);
    // index is -1 if does not exist
    if (index !== -1) {
      //this will remove 1 element at index position, and shift
      //all elements to the left to fill the gap
      this.cart.splice(index, 1);
    }
    this.sessionService.setItem('cart', this.cart);
  }

  clearCart(){
    this.cart = [];
    this.sessionService.setItem('cart', this.cart);
  }

  getCart(): Product[] {
    return this.cart;
  }
}