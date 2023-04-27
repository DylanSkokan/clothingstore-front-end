import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { SessionService } from './session.service';
import { ShoppingcartService } from './shoppingcart.service';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private tempOrder: Product[];
  constructor(private http:HttpClient, sessionService: SessionService, shoppingCartService: ShoppingcartService) {
  this.tempOrder = shoppingCartService.getCart();

   }


public createOrder( orderItems: Product[] ){
const headers = new HttpHeaders({'Content-Type': 'application/json'});
const orderCreationSuccess = this.http.post<number>
('http://localhost:8080/order/createOrder',
{orderItems}, 
{headers: headers}
)
return orderCreationSuccess

}
  
}
