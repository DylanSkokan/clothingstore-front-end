import { Component, OnInit } from '@angular/core';
import { Hat } from '../model/hat';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';
import { ShoppingcartService } from '../service/shoppingcart.service';

@Component({
  selector: 'app-view-hat',
  templateUrl: './view-hat.component.html',
  styleUrls: ['./view-hat.component.css']
})
export class ViewHatComponent implements OnInit {
  hat: Hat;

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
    this.productService.getHatById(parseInt(productId, 10)).subscribe(hat => {
      this.hat = hat;
      console.log(hat)
    });
    }
  }

  addToCart(hat: Hat) {
    console.log('Added to cart:', hat);
    this.shoppingcartService.addToCart(hat)
  }
}
