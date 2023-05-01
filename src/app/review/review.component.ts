import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Review } from '../model/review';
import { CartService } from '../service/cart.service';
import { ProductService } from '../service/product.service';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-product-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ProductReviewComponent implements OnInit {
  static reviews: Review[];

  constructor(private route: ActivatedRoute,
    private productService: ProductService) {
  }

  getReviews(): Review[] {
    return ProductReviewComponent.reviews.reverse();
  }

  ngOnInit(): void {
    ProductReviewComponent.updateReviews(this.route, this.productService);
  }

  static updateReviews(route: ActivatedRoute, productService: ProductService) {
    const productId = route.snapshot.paramMap.get('productId');
    if (productId !== null && productId !== undefined) {
      productService.getReviewsByProdId(parseInt(productId, 10)).subscribe(productReviews => {
        this.reviews = productReviews;
      });
    }
  }
}
