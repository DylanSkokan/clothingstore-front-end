import { Component, Input, OnInit } from '@angular/core';
import { Review } from '../model/review';
import { CustomerService } from '../service/customer.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';
import { CartService } from '../service/cart.service';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-product-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ProductReviewComponent implements OnInit {
  reviews: Review[]

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private shoppingcartService: CartService,
    private sessionService: SessionService) { 
    }

  ngOnInit(): void {
    this.updateReviews()
  }

  updateReviews(){
    const productId = this.route.snapshot.paramMap.get('productId');

    console.log('get review of this product: ', productId)
    
    if(productId !== null && productId !== undefined){
      this.productService.getReviewsByProdId(parseInt(productId, 10)).subscribe(productReviews => {
        this.reviews = productReviews;
      });
    }
  }
}
