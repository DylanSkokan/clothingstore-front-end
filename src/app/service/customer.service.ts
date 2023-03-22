import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  public save(customer: Customer) {
    return this.http.post<Customer>('http://localhost:8080/customer/save', customer);
  }
}
