/**
 * Order confirmation page after an order is placed.
 *
 * @author Dylan Skokan, Isaiah Cuellar, Tom Waterman, Justin Pham, Kyle McClernon
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})

export class OrderConfirmationComponent implements OnInit {
  orderId: number;

  constructor(private route: ActivatedRoute) { }

  /**
   * Displays the order number from the backend.
   */
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.orderId = params['orderId'];
    });
  }
}