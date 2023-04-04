import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Customer } from '../model/customer';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  isLoggedIn: boolean;

  constructor(private http: HttpClient, private sessionService: SessionService) {
    this.isLoggedIn = false;
  }

  public all(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:8080/customer/all');
  }

  public createCustomer(username: string, password: string, firstName: string, lastName: string, email: string) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const createAccountSuccess = this.http.post<boolean>
    ('http://localhost:8080/customer/createCustomer', 
    {username, password, firstName, lastName, email},
    {headers: headers})
    return createAccountSuccess
  }

  login(username: string, password: string): Observable<boolean> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const loginSuccess = this.http.post<boolean>('http://localhost:8080/customer/login', {username, password},
    {headers: headers})
    if(loginSuccess){
      this.sessionService.setItem('loggedIn', username)
    }
    return loginSuccess
  }

  logout() {
    this.isLoggedIn = false;
    this.sessionService.removeItem('loggedIn')
  }
}
