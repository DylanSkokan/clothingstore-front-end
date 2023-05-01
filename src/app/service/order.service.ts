import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { SessionService } from './session.service';
import { Product } from '../model/product';
import { Checkout } from '../model/checkout';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private tempOrder: Product[];
  constructor(private http: HttpClient, sessionService: SessionService, shoppingCartService: CartService) {
    this.tempOrder = shoppingCartService.getCart();
  }

  public createOrderWithCustomer(username: string, checkoutInfo: Checkout, orderItems: Product[]) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const orderCreationSuccess = this.http.post<number>
      ('http://localhost:8080/order/createOrder',
        { orderItems, username, checkoutInfo },
        { headers: headers }
      )
    return orderCreationSuccess
  }

  public createOrder(orderItems: Product[], checkoutInfo: Checkout) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const orderCreationSuccess = this.http.post<number>
      ('http://localhost:8080/order/createOrder',
        { orderItems, checkoutInfo },
        { headers: headers }
      )
    return orderCreationSuccess
  }

}
