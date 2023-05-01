import { Component, OnInit } from '@angular/core';

import { Hat } from '../model/hat';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-hats',
  templateUrl: './product-hats.component.html',
  styleUrls: ['./product-hats.component.css']
})
export class ProductHatsComponent implements OnInit {

  hats: Hat[]

  constructor(
    private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getHats().subscribe(hats => {
      this.hats = hats as unknown as Hat[];
    });
  }
}
