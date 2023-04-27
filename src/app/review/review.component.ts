import { Component, Input } from '@angular/core';
import { Review } from '../model/review';

@Component({
  selector: 'app-product-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ProductReviewComponent {
  @Input() review: Review
  userName = "Placeholder for username"
  goodOrBad = "Placeholder for recommend or not"
  reviewBody = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis."
}
