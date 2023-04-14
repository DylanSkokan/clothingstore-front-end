import { Injectable } from '@angular/core';
import { SessionService } from './session.service';
import { Product } from '../model/product';
import { Subject } from 'rxjs';

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

  //public cartItemList: any = []
  //public productList = new BehaviorSubject<any>([]);

  constructor(private sessionService: SessionService) { 
    //set the cart to empty upon session creation
    //if cart is null
    let cart = this.sessionService.getItem('cart')
    if(cart == null){
      this.sessionService.setItem('cart', this.cart)
    }
  }

  /*
  getProducts(){
    return this.productList;
  }

  setProduct(product : Product){
    this.cart.push(...product);
    this.productList.next(product);
  }
  */

  setCart(cart: Cart) {
    this.cart = cart
    this.updateCart()
  }

  getCartUpdated() {
    return this.cartUpdated.asObservable();
  }

  //call this method every time something changes with the cart
  updateCart() {
    //update cart's totalCost
    this.cart.totalCost = this.getTotalPrice();

    //save cart to session storage
    this.sessionService.setItem('cart', this.cart);

    //notify subscribers that cart has been updated
    this.cartUpdated.next();
  }

  getCart(){
    return this.sessionService.getItem('cart');
  }

  getCartSize(){
    this.cart = this.sessionService.getItem('cart')

    let totalItems = 0
    for (let cartItem of this.cart.products) {
      totalItems += cartItem.quantity
    }

    return totalItems;
  }

  addToCart(product : Product){
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
      console.log('Adding new item to cart')
      this.cart.products.push(product);
      console.log(this.cart.products)
    }

    console.log(this.cart.products)
    //each time something is added to the cart, update the totalCost
    this.cart.totalCost = this.getTotalPrice();
    console.log(this.cart.totalCost)
    console.log(this.cart.products)

    this.updateCart()

    /*
    this.cartItemList.push(product)
    this.productList.next(this.cartItemList);
    */
    console.log('End of add to cart, cart from local is now:')
    console.log(this.cart)
    console.log('End of add to cart, cart from session is now:')
    console.log(this.sessionService.getItem('cart'))
  }

  setProductQuantity(product: Product, newQuantity: number){
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
    this.cart.products.map((product:Product)=>{
        grandTotal += product.price * product.quantity
    })
    return grandTotal;
  }

  /*
  getTotalPrice() : number {
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
        grandTotal += a.total
    })
    return grandTotal;
  }
  removeCartItem(product : any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllItems(){
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
  */

  removeCartItem(product : Product){
    console.log('trying to remove the')
    console.log(product)

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
    
    console.log('after removal cart has')
    console.log(this.cart.products)

    this.updateCart()
  }

  removeAllItems(){
    //get the most updated cart
    this.cart = this.sessionService.getItem('cart')

    this.cart.products = [];
    this.cart.totalCost = 0;
   
    this.updateCart()
  }
}
