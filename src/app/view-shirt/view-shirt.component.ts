

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Review } from '../model/review';
import { Shirt } from '../model/shirt';
import { ProductReviewComponent } from '../review/review.component';
import { CartService } from '../service/cart.service';
import { CustomerService } from '../service/customer.service';
import { ProductService } from '../service/product.service';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-view-shirt',
  templateUrl: './view-shirt.component.html',
  styleUrls: ['./view-shirt.component.css']
})
export class ViewShirtComponent implements OnInit {
  shirt: Shirt;
  size: String;
  reviews: Review[];
  showReviewForm = false;
  newReviewText: string;
  newReviewRating: number;

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private shoppingcartService: CartService,
    public customerService: CustomerService,
    private sessionService: SessionService) {
  }

  ngOnInit(): void {

    // Get the productId route parameter
    const productId = this.route.snapshot.paramMap.get('productId');

    if (productId !== null) {
      // Fetch the shirt object using the productId
      this.productService.getShirtById(parseInt(productId, 10)).subscribe(shirt => {
        this.shirt = shirt;
      });

      // get the product reviews for this product ID
      this.productService.getReviewsByProdId(parseInt(productId, 10)).subscribe(reviews => {
        this.reviews = reviews;
      });
    }
  }

  addToCart(shirt: Shirt) {
    this.shoppingcartService.addToCart(shirt)
  }

  submitReview() {
    if (this.newReviewText.trim()) {
      let customer = this.sessionService.getItem('customer')
      this.productService.postReview(this.newReviewRating, customer.userId,
        this.shirt.productId, this.newReviewText, customer.username).subscribe(success => {
          this.newReviewText = '';
          this.showReviewForm = false;
          ProductReviewComponent.updateReviews(this.route, this.productService)
        });
    } else {
      alert('Please write a review before submitting.');
    }
  }

  pickingSize(e: any) {
    this.size = e.target.value
  }
}
