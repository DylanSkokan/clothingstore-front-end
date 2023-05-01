/**
 * Reviews underneath products.
 *
 * @author Dylan Skokan, Isaiah Cuellar, Tom Waterman, Justin Pham, Kyle McClernon
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Review } from '../model/review';
import { ProductService } from '../service/product.service';

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

  /**
   * Gets all reviews for a product.
   * 
   * @returns all reviews sorted by date submitted.
   */
  getReviews(): Review[] {
    if(ProductReviewComponent.reviews == null) {
      return []
    } else {
      return ProductReviewComponent.reviews.reverse();
    }
    
  }

  /**
   * On initialization get the most updated reviews for this product.
   */
  ngOnInit(): void {
    ProductReviewComponent.updateReviews(this.route, this.productService);
  }

  /**
   * Handles getting the reviews for a product using the product ID in the
   * URL.
   * 
   * @param route The route given from the product viewing page.
   * @param productService the product service used to request the reviews.
   */
  static updateReviews(route: ActivatedRoute, productService: ProductService) {
    const productId = route.snapshot.paramMap.get('productId');
    if (productId !== null && productId !== undefined) {
      productService.getReviewsByProdId(parseInt(productId, 10)).subscribe(productReviews => {
        this.reviews = productReviews;
      });
    }
  }
}
