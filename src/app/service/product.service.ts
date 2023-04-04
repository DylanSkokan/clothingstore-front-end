import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Shirt } from '../model/shirt';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getShirts(): Observable<string> {
    return this.http.get<string>('http://localhost:8080/shirt/getAll')
  }

  getShoes(): Observable<string> {
    return this.http.get<string>('http://localhost:8080/shoes/getAll')
  }

  getPants(): Observable<string> {
    return this.http.get<string>('http://localhost:8080/pants/getAll')
  }

  getHats(): Observable<string> {
    return this.http.get<string>('http://localhost:8080/hat/getAll')
  }
}
