import { Component } from '@angular/core';
import { Order } from '../model/order';
import { AbstractControl, FormControl, FormGroup, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { OrderService } from '../service/order.service';
import { ShoppingcartService } from '../service/shoppingcart.service';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent {
  order: Order;
  response : string | null;

constructor(private orderService: OrderService, private cartService: ShoppingcartService, private sessionService: SessionService){
  // orderService: OrderService
    
    this.order = new Order();
  }
onSubmit(form: NgForm){
  console.log(typeof this.cartService.getCart())
  console.log(this.cartService.getCart())
  this.orderService.createOrder(this.cartService.getCart()).subscribe(response => {
 
  });
}
onButtonClick(){
  console.log(typeof this.cartService.getCart())
  console.log(this.sessionService.getItem('cart'));
  this.orderService.createOrder(this.sessionService.getItem('cart')).subscribe(response => {
 


});

}}