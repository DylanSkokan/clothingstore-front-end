/**
 * Page displaying all shoes.
 *
 * @author Dylan Skokan, Isaiah Cuellar, Tom Waterman, Justin Pham, Kyle McClernon
 */
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

  /**
   * Gets all shoes from the database for displaying.
   */
  ngOnInit(): void {
    this.productService.getShoes().subscribe(shoes => {
      this.shoes = shoes as unknown as Shoe[];
    });
  }
}
