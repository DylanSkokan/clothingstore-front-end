import { Component } from '@angular/core';

import { CartService } from './service/cart.service';
import { CustomerService } from './service/customer.service';
import { SessionService } from './service/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;

  constructor(private sessionService: SessionService,
    private cartService: CartService,
    private customerService: CustomerService) {

  }

  ngOnInit() {
    //retrieve session data when the application is initialized
    let cart = this.sessionService.getItem('cart');

    if (cart !== null) {
      this.cartService.setCart(cart)
    }

    let customer = this.sessionService.getItem('customer');

    if (customer !== null) {
      this.customerService.isLoggedIn = true;
      this.customerService.customerSubject.next(customer);
      this.sessionService.setItem('customer', customer)
    }
  }
}
