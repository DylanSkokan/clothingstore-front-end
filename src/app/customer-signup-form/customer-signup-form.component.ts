/**
 * Logic and functionality regarding the new account signup form.
 *
 * @author Dylan Skokan, Isaiah Cuellar, Tom Waterman, Justin Pham, Kyle McClernon
 */
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-customer-signup-form',
  templateUrl: './customer-signup-form.component.html',
  styleUrls: ['./customer-signup-form.component.css']
})
export class CustomerSignupFormComponent {

  customer: Customer;
  response: string | null;
  usernameExists: boolean = false;
  invalidPassword: boolean = false;

  constructor(
    private router: Router,
    private customerService: CustomerService) {
    this.customer = new Customer();
  }

  /**
   * Attempts to create the customer with the information in the fields. Needs
   * matching passwords in the password and password confirmation fields to
   * attempt account creation. If the username already exists in the database,
   * does not let user create an account.
   * 
   * @param form information from the login form.
   */
  onSubmit(form: NgForm) {
    //If passwords do not match reset fields and do not create customer.
    if (form.controls['password'].value !== form.controls['rePassword'].value) {
      this.invalidPassword = true;
      form.controls['password'].reset();
      form.controls['rePassword'].reset();
    } else {
      this.customerService.createCustomer(this.customer.username, this.customer.password,
        this.customer.firstName, this.customer.lastName, this.customer.email).subscribe(response => {
          if (response == true) {
            this.usernameExists = false;
            this.router.navigate(['customer/accountCreationSuccess']);
          } else {
            this.usernameExists = true;
          }
        });
    }
  }
}