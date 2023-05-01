import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Shoe } from '../model/shoe';
import { ProductReviewComponent } from '../review/review.component';
import { CartService } from '../service/cart.service';
import { CustomerService } from '../service/customer.service';
import { ProductService } from '../service/product.service';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-view-shoes',
  templateUrl: './view-shoes.component.html',
  styleUrls: ['./view-shoes.component.css']
})
export class ViewShoesComponent implements OnInit {
  shoes: Shoe;
  newReviewText: string;
  newReviewRating: number;
  showReviewForm = false;

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private shoppingcartService: CartService,
    private sessionService: SessionService,
    public customerService: CustomerService) {
  }

  ngOnInit(): void {
    // Get the productId route parameter
    const productId = this.route.snapshot.paramMap.get('productId');

    if (productId !== null) {
      // Fetch the shirt object using the productId
      this.productService.getShoesById(parseInt(productId, 10)).subscribe(shoes => {
        this.shoes = shoes;
      });
    }
  }

  submitReview() {
    if (this.newReviewText.trim()) {
      let customer = this.sessionService.getItem('customer')
      this.productService.postReview(this.newReviewRating, customer.userId,
        this.shoes.productId, this.newReviewText, customer.username).subscribe(success => {
          this.newReviewText = '';
          this.showReviewForm = false;
          ProductReviewComponent.updateReviews(this.route, this.productService)
        });
    } else {
      alert('Please write a review before submitting.');
    }
  }

  addToCart(shoes: Shoe) {
    this.shoppingcartService.addToCart(shoes)
  }
}
