/**
 * Shopping cart logic and functionality.
 *
 * @author Dylan Skokan, Isaiah Cuellar, Tom Waterman, Justin Pham, Kyle McClernon
 */
import { Subject } from 'rxjs';

import { Injectable } from '@angular/core';

import { Product } from '../model/product';
import { SessionService } from './session.service';

interface Cart {
  products: Product[];
  totalCost: number;
}

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private cart: Cart = { products: [], totalCost: 0 };
  private cartUpdated = new Subject<void>();

  constructor(private sessionService: SessionService) {
    //set the cart to empty upon session creation
    //if cart is null
    let cart = this.sessionService.getItem('cart')
    if (cart == null) {
      this.sessionService.setItem('cart', this.cart)
    }
  }

  setCart(cart: Cart) {
    this.cart = cart
    this.updateCart()
  }

  getCartUpdated() {
    return this.cartUpdated.asObservable();
  }

  /**
   * Calcuate a new total cost, set the cart in the session, and notify subscribers
   * of the cart that it has changed every time the cart changes.
   */
  updateCart() {
    //update cart's totalCost
    this.cart.totalCost = this.getTotalPrice();

    //save cart to session storage
    this.sessionService.setItem('cart', this.cart);

    //notify subscribers that cart has been updated
    this.cartUpdated.next();
  }

  getCart() {
    return this.sessionService.getItem('cart');
  }

  getCartSize() {
    this.cart = this.sessionService.getItem('cart')

    let totalItems = 0
    for (let cartItem of this.cart.products) {
      totalItems += cartItem.quantity
    }

    return totalItems;
  }

  addToCart(product: Product) {
    //get the most updated cart
    this.cart = this.sessionService.getItem('cart')

    let productAlreadyInCart = false;

    //if product exists in cart, increase qty
    for (let cartItem of this.cart.products) {
      if (cartItem.productId === product.productId) {
        cartItem.quantity++;
        productAlreadyInCart = true;
        break;
      }
    }

    //else, add it to the cart normally
    if (!productAlreadyInCart) {
      product.quantity = 1
      this.cart.products.push(product);
    }

    //each time something is added to the cart, update the totalCost
    this.cart.totalCost = this.getTotalPrice();

    this.updateCart()
  }

  setProductQuantity(product: Product, newQuantity: number) {
    //get the most updated cart
    this.cart = this.sessionService.getItem('cart')

    for (let cartItem of this.cart.products) {
      if (cartItem.productId === product.productId) {
        cartItem.quantity = newQuantity;
        break;
      }
    }

    this.updateCart()
  }

  getTotalPrice() {
    let grandTotal = 0;
    this.cart.products.map((product: Product) => {
      grandTotal += product.price * product.quantity
    })
    return grandTotal;
  }

  removeCartItem(product: Product) {

    //get the most updated cart
    this.cart = this.sessionService.getItem('cart')

    //get the index of the product to be removed
    //const index = this.cart.products.indexOf(product);
    for (let index in this.cart.products) {
      if (this.cart.products[index].productId === product.productId) {
        this.cart.products.splice(parseInt(index), 1);
        break;
      }
    }

    this.updateCart()
  }

  removeAllItems() {
    //get the most updated cart
    this.cart = this.sessionService.getItem('cart')

    this.cart.products = [];
    this.cart.totalCost = 0;

    this.updateCart()
  }
}
