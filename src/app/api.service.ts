import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) {}

/*   getAllProducts(){
    return this.http.get<any>('http://localhost:8080/product/all').pipe(map((response:any) => {
      return response;
    }))
  } */

  getAllProducts(){
    return this.http.get<any>("https://fakestoreapi.com/products").pipe(map((response:any) => {
      return response;
    }))
  }
}
