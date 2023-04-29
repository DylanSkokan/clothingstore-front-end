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
  static reviews: Review[];

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private shoppingcartService: CartService,
    private sessionService: SessionService) { 
    }

  getReviews(): Review[] {
    return ProductReviewComponent.reviews.reverse();
  }

  ngOnInit(): void {
    ProductReviewComponent.updateReviews(this.route, this.productService);
  }

  static updateReviews(route: ActivatedRoute, productService: ProductService){
    const productId = route.snapshot.paramMap.get('productId');

    console.log('IN UPDATE REVIEWS!!!: ', productId)
    
    if(productId !== null && productId !== undefined){
      productService.getReviewsByProdId(parseInt(productId, 10)).subscribe(productReviews => {
        this.reviews = productReviews;
      });
    }
  }
}
