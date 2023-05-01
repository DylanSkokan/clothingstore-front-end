

import { Component, OnInit } from '@angular/core';

import { Shirt } from '../model/shirt';
import { ProductService } from '../service/product.service';

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

  ngOnInit(): void {
    this.productService.getShirts().subscribe(shirts => {
      this.shirts = shirts as unknown as Shirt[];
    });
  }
}
