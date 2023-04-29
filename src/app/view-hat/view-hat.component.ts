import { Component, OnInit } from '@angular/core';
import { Hat } from '../model/hat';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';
import { CartService } from '../service/cart.service';
import { CustomerService } from '../service/customer.service';
import { SessionService } from '../service/session.service';
import { ProductReviewComponent } from '../review/review.component';

@Component({
  selector: 'app-view-hat',
  templateUrl: './view-hat.component.html',
  styleUrls: ['./view-hat.component.css']
})
export class ViewHatComponent implements OnInit {
  hat: Hat;
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

    if(productId !== null){
    // Fetch the shirt object using the productId
    this.productService.getHatById(parseInt(productId, 10)).subscribe(hat => {
      this.hat = hat;
      console.log(hat)
    });
    }
  }

  submitReview(){
    if (this.newReviewText.trim()) {
      let customer = this.sessionService.getItem('customer')
      this.productService.postReview(this.newReviewRating, customer.userId, 
        this.hat.productId, this.newReviewText, customer.username).subscribe(success => {
        this.newReviewText = '';
        this.showReviewForm = false;
        ProductReviewComponent.updateReviews(this.route, this.productService)
      });
    } else {
      alert('Please write a review before submitting.');
    }
  }

  addToCart(hat: Hat) {
    console.log('Added to cart:', hat);
    this.shoppingcartService.addToCart(hat)
  }
}

