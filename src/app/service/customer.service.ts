import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { Customer } from '../model/customer';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customerUpdated = new Subject<void>();
  public isLoggedIn: boolean;

  public customerSubject = new BehaviorSubject<Customer | null>(null);
  public customer$ = this.customerSubject.asObservable();

  constructor(private http: HttpClient, private sessionService: SessionService) {
    this.isLoggedIn = false;
  }

  public all(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:8080/customer/all');
  }

  public getCustById(id: string): Observable<Customer> {
    return this.http.get<Customer>(`http://localhost:8080/customer/${id}`)
  }

  public createCustomer(username: string, password: string, firstName: string, lastName: string, email: string) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const createAccountSuccess = this.http.post<boolean>
    ('http://localhost:8080/customer/createCustomer', 
    {username, password, firstName, lastName, email},
    {headers: headers})
    return createAccountSuccess
  }

  public updateCustomer(oldUsername: string, username: string, password: string, firstName: string, lastName: string, email: string):
  Observable<boolean> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<boolean>
    ('http://localhost:8080/customer/changeAccountInfo', 
    {oldUsername, username, password, firstName, lastName, email},
    {headers: headers})
  }

  public getCustomer(username: string):
  Observable<Customer> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<Customer>
    ('http://localhost:8080/customer/getCustomer', 
    {username},
    {headers: headers})
  }

  login(username: string, password: string): Observable<Customer> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<Customer>('http://localhost:8080/customer/login', {username, password},
    {headers: headers})
  }

  logout() {
    this.isLoggedIn = false;
    this.customerSubject.next(null);
    this.sessionService.removeItem('customer')
  }
}
