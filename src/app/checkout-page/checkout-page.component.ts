import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { Subject, takeUntil } from 'rxjs';
import { Product } from '../model/product';
import { Order } from '../model/order';
import { AbstractControl, FormControl, FormGroup, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { OrderService } from '../service/order.service';
import { ShoppingcartService } from '../service/shoppingcart.service';
import { SessionService } from '../service/session.service';
import { CustomerService } from '../service/customer.service';

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
  
  /* Do we need this? */
  order: Order;
  response : string | null;

  constructor(private cartService : CartService, private orderService: OrderService, private sessionService: SessionService, private customerService: CustomerService){
    this.order = new Order();
  }

  ngOnInit(): void {
    this.cart = this.cartService.getCart()
    this.cartService.getCartUpdated()
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(() => {
      this.totalItems = this.cartService.getCartSize();
    });
    
  }


  onButtonClick(){
    console.log(this.sessionService.getItem('cart'));
    if (this.sessionService.getItem('customer') == null){
      console.log('IN NULL CUSTOMER')
      this.orderService.createOrder(this.sessionService.getItem('cart')).subscribe(response => {
      });
    } 
    else {
      console.log('IN EXISTS CUSTOMER')
      console.log(this.sessionService.getItem('customer').username);
      this.orderService.createOrderWithCustomer(this.sessionService.getItem('customer').username, this.sessionService.getItem('cart')).subscribe(response => {
      });

    }

    


   this.cartService.removeAllItems();
  }
}
