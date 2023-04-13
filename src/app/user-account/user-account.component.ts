import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})

export class UserAccountComponent implements OnInit {

  customer: Customer;

  constructor (
    private route: ActivatedRoute,
      private router: Router,
        private customerService: CustomerService,
        public sessionService: SessionService) {
        }

  ngOnInit(): void {
    this.customer = this.sessionService.getItem('customer')
  }

  onSubmit(form: NgForm) {

    const oldUsername = this.sessionService.getItem('customer').username
    const username = form.value.username;
    const password = form.value.password;
    const firstName = form.value.firstName;
    const lastName = form.value.lastName;
    const email = form.value.email;

    console.log(password)

    this.customerService.updateCustomer(oldUsername, username, password, firstName, lastName, email).subscribe(confirmation => {
      if (confirmation) {
        this.customerService.getCustomer(username).subscribe(updatedCust => {
          console.log(updatedCust)
          this.customerService.customerSubject.next(updatedCust)
          this.sessionService.setItem('customer', updatedCust)
          this.customer = updatedCust
          this.router.navigate(['']);
        });
      }
    });
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