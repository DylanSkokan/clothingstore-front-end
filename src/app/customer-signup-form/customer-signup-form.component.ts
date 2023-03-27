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

  registerationForm: FormGroup = new FormGroup({});

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private customerService: CustomerService) {
    this.customer = new Customer();
  }

  passwordMatchValidator(form: NgForm) {
    console.log(form.controls['password'].value)
    console.log(form.controls['rePassword'].value)

    if (form.controls['password'].value !== form.controls['rePassword'].value) {
      console.log('passwords do not match');
      form.controls['rePassword'].setErrors({ passwordMismatch: true });
    } else {
      console.log('passwords match');
      form.controls['rePassword'].setErrors(null);
    }
  }

  onSubmit(form: NgForm) {
    //if(!form.controls['rePassword'].hasError){
      this.customerService.createCustomer(this.customer).subscribe(response => {
        console.log(response);
      });
      
      this.router.navigate(['customer/accountCreationSuccess']);
    //}
  }
}