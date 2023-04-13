import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';
import { HeaderComponent } from '../header/header.component';
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
    private route: ActivatedRoute, 
      private router: Router, 
        private customerService: CustomerService,
        private sessionService: SessionService)
        {
    this.customer = new Customer();
  }

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
