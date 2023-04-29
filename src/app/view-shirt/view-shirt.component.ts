import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Shirt } from '../model/shirt';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';
import { CartService } from '../service/cart.service';
import { catchError, throwError } from 'rxjs';
import { Review } from '../model/review';
import { CustomerService } from '../service/customer.service';
import { SessionService } from '../service/session.service';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ProductReviewComponent } from '../review/review.component';

@Component({
  selector: 'app-view-shirt',
  templateUrl: './view-shirt.component.html',
  styleUrls: ['./view-shirt.component.css']
})
export class ViewShirtComponent implements OnInit {
  shirt: Shirt;
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

    console.log('product id for this shirt', productId)

    if(productId !== null){
    // Fetch the shirt object using the productId
    this.productService.getShirtById(parseInt(productId, 10)).pipe(
      catchError(error => {
        console.log(error);
        return throwError(() => error);
      })
    ).subscribe(shirt => {
      this.shirt = shirt;
      console.log(shirt);
    });

    // get the product reviews for this product ID
    this.productService.getReviewsByProdId(parseInt(productId, 10)).pipe(
      catchError(error => {
        console.log(error);
        return throwError(() => error);
      })
    ).subscribe(reviews => {
      this.reviews = reviews;
      console.log(reviews);
    });
    }
  }

  addToCart(shirt: Shirt) {
    console.log('Added to cart:', shirt);
    this.shoppingcartService.addToCart(shirt)
  }

  submitReview(){
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

  size: String;

  pickingSize(e : any){
    this.size = e.target.value
  }
}
