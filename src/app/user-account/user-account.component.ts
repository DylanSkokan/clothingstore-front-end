import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})

export class UserAccountComponent {

  customer: Customer;

  constructor (
    private route: ActivatedRoute,
      private router: Router,
        private customerService: CustomerService) {
          this.customer = new Customer();
        }

  onSubmit(form: NgForm) {
    alert(this.customer.username + "\n" + this.customer.password + "\n" + this.customer.firstName + "\n" + this.customer.lastName + "\n" + this.customer.email );
    this.router.navigate(['']);
  }


}


/** 
 * Some things to verify
 * 
 * Make sure when this is loaded with springboot that it displays the users information off the bat in the placeholders
 * When they click on confirm changes, make sure it updates the users information in the database 
 * 
 */