/**
 * Order communication with the back end.
 *
 * @author Dylan Skokan, Isaiah Cuellar, Tom Waterman, Justin Pham, Kyle McClernon
 */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Checkout } from '../model/checkout';
import { Product } from '../model/product';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) {
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
