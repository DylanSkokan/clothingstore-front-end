import { Component, OnInit } from '@angular/core';
import { Pants } from '../model/pants';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';
import { ShoppingcartService } from '../service/shoppingcart.service';

@Component({
  selector: 'app-view-pants',
  templateUrl: './view-pants.component.html',
  styleUrls: ['./view-pants.component.css']
})
export class ViewPantsComponent implements OnInit {
  pants: Pants;

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private shoppingcartService: ShoppingcartService) { 
      
    }

  ngOnInit(): void {
    // Get the productId route parameter
    const productId = this.route.snapshot.paramMap.get('productId');

    console.log('product id for these sheos', productId)

    if(productId !== null){
    // Fetch the shirt object using the productId
    this.productService.getPantsById(parseInt(productId, 10)).subscribe(pants => {
      this.pants = pants;
      console.log(pants)
    });
    }
  }

  addToCart(pants: Pants) {
    console.log('Added to cart:', pants);
    this.shoppingcartService.addToCart(pants)
  }
}
