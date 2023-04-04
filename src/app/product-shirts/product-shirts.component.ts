import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Shirt } from '../model/shirt';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-shirts',
  templateUrl: './product-shirts.component.html',
  styleUrls: ['./product-shirts.component.css']
})
export class ProductShirtsComponent implements OnInit {

  shirts: Shirt[]

  constructor(
    private productService: ProductService) {
  }

  //get shirts when click on shirts
  ngOnInit(): void {
    this.productService.getShirts().subscribe(shirts => {
      this.shirts = shirts as unknown as Shirt[];
      console.log(this.shirts)

      //example for loop to get shirt attributes
      for (let i = 0; i < this.shirts.length; i++) {
        const shirt: Shirt = this.shirts[i];
        console.log(shirt.brand)
      }
    });
  }
}
