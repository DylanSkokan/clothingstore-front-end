import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service'; 
import { CartService } from 'src/app/cart.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  public productList : any;
  constructor(private api : ApiService, private cartService : CartService) {}

  ngOnInit(): void {
    this.api.getAllProducts().subscribe(res=>{
      this.productList = res;

      this.productList.forEach((a : any) =>{
        Object.assign(a, {quantity:1, total:a.price});
      })
    })
  }

  addToCart(item : any){
    this.cartService.addToCart(item)
  }
}
