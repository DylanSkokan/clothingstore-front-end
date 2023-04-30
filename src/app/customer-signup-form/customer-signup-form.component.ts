import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-customer-signup-form',
  templateUrl: './customer-signup-form.component.html',
  styleUrls: ['./customer-signup-form.component.css']
})
export class CustomerSignupFormComponent {

  customer: Customer;
  response : string | null;
  usernameExists: boolean = false;
  invalidPassword: boolean = false;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private customerService: CustomerService) {
    this.customer = new Customer();
  }

  //username, password, firstname, lastname, email
  onSubmit(form: NgForm) {
    if (form.controls['password'].value !== form.controls['rePassword'].value) {
      this.invalidPassword = true;
      form.controls['password'].reset();
      form.controls['rePassword'].reset();
    } else {
      this.customerService.createCustomer(this.customer.username, this.customer.password,
        this.customer.firstName, this.customer.lastName, this.customer.email).subscribe(response => {
        if (response == true){
          this.usernameExists = false;
          this.router.navigate(['customer/accountCreationSuccess']);
        } else {
          this.usernameExists = true;
        }
      });
    }
  }
}