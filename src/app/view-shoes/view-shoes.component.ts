import { Component, OnInit } from '@angular/core';
import { Shoe } from '../model/shoe';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';
import { CartService } from '../service/cart.service';
import { SessionService } from '../service/session.service';
import { CustomerService } from '../service/customer.service';

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

    console.log('product id for these sheos', productId)

    if(productId !== null){
    // Fetch the shirt object using the productId
    this.productService.getShoesById(parseInt(productId, 10)).subscribe(shoes => {
      this.shoes = shoes;
      console.log(shoes)
    });
    }
  }

  submitReview(){
    if (this.newReviewText.trim()) {
      let customer = this.sessionService.getItem('customer')
      this.productService.postReview(this.newReviewRating, customer.userId, 
        this.shoes.productId, this.newReviewText).subscribe(success => {
        this.newReviewText = '';
        this.showReviewForm = false;
      });
    } else {
      alert('Please write a review before submitting.');
    }
  }

  addToCart(shoes: Shoe) {
    console.log('Added to cart:', shoes);
    this.shoppingcartService.addToCart(shoes)
  }
}
