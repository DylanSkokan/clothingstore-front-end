import { Component, OnInit } from '@angular/core';

import { Shoe } from '../model/shoe';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-shoes',
  templateUrl: './product-shoes.component.html',
  styleUrls: ['./product-shoes.component.css']
})
export class ProductShoesComponent implements OnInit {

  shoes: Shoe[]

  constructor(
    private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getShoes().subscribe(shoes => {
      this.shoes = shoes as unknown as Shoe[];
    });
  }
}
