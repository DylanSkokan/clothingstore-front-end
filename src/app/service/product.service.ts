import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Shirt } from '../model/shirt';
import { Shoe } from '../model/shoe';
import { Pants } from '../model/pants';
import { Hat } from '../model/hat';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getShirtById(id: number): Observable<Shirt> {
    //NEED TO USE "BACK TICKS" instead of single quotes when sending ID
    return this.http.get<Shirt>(`http://localhost:8080/shirt/getById/${id}`)
  }

  getShoesById(id: number): Observable<Shoe> {
    return this.http.get<Shoe>(`http://localhost:8080/shoes/getById/${id}`)
  }

  getHatById(id: number): Observable<Hat> {
    return this.http.get<Hat>(`http://localhost:8080/hat/getById/${id}`)
  }

  getPantsById(id: number): Observable<Pants> {
    return this.http.get<Pants>(`http://localhost:8080/pants/getById/${id}`)
  }

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
