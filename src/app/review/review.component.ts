import { Component, Input, OnInit } from '@angular/core';
import { Review } from '../model/review';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-product-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ProductReviewComponent implements OnInit {
  @Input() review: Review
  userName = "Placeholder for username"
  goodOrBad = "Placeholder for recommend or not"
  reviewBody = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis."
  customerService: CustomerService;

  //test comment

  ngOnInit(): void {

    const userId = this.review.userAccountId

    if(userId !== null){
      this.customerService.getCustById("string").subscribe((customer) => {
        this.userName = customer.username;
        console.log(customer)
      });
    }

  }

}
