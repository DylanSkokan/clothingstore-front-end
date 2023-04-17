import { Component, OnInit } from '@angular/core';
import { Shirt } from '../model/shirt';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-view-shirt',
  templateUrl: './view-shirt.component.html',
  styleUrls: ['./view-shirt.component.css']
})
export class ViewShirtComponent implements OnInit {
  shirt: Shirt;

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private shoppingcartService: CartService) { 
      
    }

  ngOnInit(): void {
    // Get the productId route parameter
    const productId = this.route.snapshot.paramMap.get('productId');

    console.log('product id for this shirt', productId)

    if(productId !== null){
    // Fetch the shirt object using the productId
    this.productService.getShirtById(parseInt(productId, 10)).subscribe(shirt => {
      this.shirt = shirt;
      console.log(shirt)
    });
    }
  }

  addToCart(shirt: Shirt) {
    console.log('Added to cart:', shirt);
    this.shoppingcartService.addToCart(shirt)
  }


  size: String;

  pickingSize(e : any){
    this.size = e.target.value
  }
}
