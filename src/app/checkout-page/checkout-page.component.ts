/**
 * Handles logic and functionality of the checkout page.
 *
 * @author Dylan Skokan, Isaiah Cuellar, Tom Waterman, Justin Pham, Kyle McClernon
 */
import { Subject, takeUntil } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Checkout } from '../model/checkout';
import { Product } from '../model/product';
import { OrderService } from '../service/order.service';
import { SessionService } from '../service/session.service';

interface Cart {
  products: Product[];
  totalCost: number;
}

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})

export class CheckoutPageComponent implements OnInit {
  private unsubscribe = new Subject<void>();
  public totalItems: number = 0;
  cart: Cart = { products: [], totalCost: 0 };
  checkoutInfo: Checkout = new Checkout();

  constructor(private cartService: CartService,
    private orderService: OrderService, 
    private sessionService: SessionService,
    private router: Router) {
  }

  /**
   * Gets and initializes the cart from the cart service upon page initialization for displaying.
   */
  ngOnInit(): void {
    this.cart = this.cartService.getCart()
    this.cartService.getCartUpdated()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => {
        this.totalItems = this.cartService.getCartSize();
      });
  }

  /**
   * Depending on if a customer is logged in, send corresponding order information to the back end.
   */
  onSubmit() {
    if (this.sessionService.getItem('customer') == null) {
      this.orderService.createOrder(this.sessionService.getItem('cart'), this.checkoutInfo).subscribe(response => {
        this.handeOrderResponse(response)
      });
    }
    else {
      this.orderService.createOrderWithCustomer(this.sessionService.getItem('customer').username, this.checkoutInfo, this.sessionService.getItem('cart')).subscribe(response => {
        this.handeOrderResponse(response)
      });
    }
  }

  /**
   * Handle the order response from the submit method.
   * 
   * @param orderId the generated ID for the order.
   */
  handeOrderResponse(orderId: number) {
    this.cartService.removeAllItems();
    this.router.navigate(['/orderConfirmation'], { queryParams: { orderId: orderId } });
  }
}