import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  public all(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:8080/customer/all');
  }

  public createCustomer(customer: Customer) {
    return this.http.post('http://localhost:8080/customer/createCustomer',
     customer,
     { responseType: 'text' });
  }

  public login(customer: Customer) {
    return this.http.post('http://localhost:8080/customer/login', 
    customer);
  }
}
