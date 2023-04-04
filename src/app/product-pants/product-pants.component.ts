import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Pants } from '../model/pants';

@Component({
  selector: 'app-product-pants',
  templateUrl: './product-pants.component.html',
  styleUrls: ['./product-pants.component.css']
})
export class ProductPantsComponent implements OnInit{
  pants: Pants[]

  constructor(
    private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getPants().subscribe(pants => {
      this.pants = pants as unknown as Pants[];
      console.log(this.pants)
    });
  }
}
