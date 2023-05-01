/**
 * Handles the customer login form.
 *
 * @author Dylan Skokan, Isaiah Cuellar, Tom Waterman, Justin Pham, Kyle McClernon
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-customer-login-form',
  templateUrl: './customer-login-form.component.html',
  styleUrls: ['./customer-login-form.component.css']
})
export class CustomerLoginFormComponent {
  customer: Customer;
  validCredentials: boolean = true;

  constructor(
    private router: Router,
    private customerService: CustomerService,
    private sessionService: SessionService) {
    this.customer = new Customer();
  }

  /**
   * Attempts to log the customer in with the infromation in the fields. It does a back end
   * check to see if the credentials are valid.
   */
  onSubmit() {
    this.customerService.login(this.customer.username, this.customer.password).subscribe(loggedInCust => {
      if (loggedInCust !== null) {
        this.customerService.isLoggedIn = true;
        this.customerService.customerSubject.next(loggedInCust)
        this.validCredentials = true;
        this.sessionService.setItem('customer', loggedInCust)
        this.router.navigate(['']);
      } else {
        this.customerService.isLoggedIn = false;
        this.validCredentials = false;
      }
    });
  }
}
