import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-customer-login-form',
  templateUrl: './customer-login-form.component.html',
  styleUrls: ['./customer-login-form.component.css']
})
export class CustomerLoginFormComponent {
  customer: Customer;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private customerService: CustomerService)
        {
    this.customer = new Customer();
  }

  onSubmit() {
    this.customerService.login(this.customer.username, this.customer.password).subscribe(response => {
      console.log('log in response:' + response);
    });
    
    this.router.navigate(['']);
  }
}
