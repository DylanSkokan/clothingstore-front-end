import { Component, OnInit } from '@angular/core';
import { Pants } from '../model/pants';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';
import { CartService } from '../service/cart.service';
import { SessionService } from '../service/session.service';
import { CustomerService } from '../service/customer.service';
import { Review } from '../model/review';
import { Observable } from 'rxjs/internal/Observable';
import { ProductReviewComponent } from '../review/review.component';

@Component({
  selector: 'app-view-pants',
  templateUrl: './view-pants.component.html',
  styleUrls: ['./view-pants.component.css']
})
export class ViewPantsComponent implements OnInit {
  pants: Pants;
  newReviewText: string;
  newReviewRating: number;
  showReviewForm = false;
  productReviews: Review[];

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private shoppingcartService: CartService,
    private sessionService: SessionService,
    public customerService: CustomerService) { 
    }

  ngOnInit(): void {
    // Get the productId route parameter
    const productId = this.route.snapshot.paramMap.get('productId');

    if(productId !== null && productId !== undefined){
    // Fetch the shirt object using the productId
    this.productService.getPantsById(parseInt(productId, 10)).subscribe(pants => {
      this.pants = pants;
      console.log(pants)
    });
    }
  }

  submitReview(){
    if (this.newReviewText.trim()) {
      let customer = this.sessionService.getItem('customer')
      this.productService.postReview(this.newReviewRating, customer.userId, 
        this.pants.productId, this.newReviewText, customer.username).subscribe(success => {
        this.newReviewText = '';
        this.showReviewForm = false;
        ProductReviewComponent.updateReviews(this.route, this.productService)

      });
    } else {
      alert('Please write a review before submitting.');
    }
  }
  
  addToCart(pants: Pants) {
    console.log('Added to cart:', pants);
    this.shoppingcartService.addToCart(pants)
  }

  

  
}