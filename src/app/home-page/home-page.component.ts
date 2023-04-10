import { Component } from '@angular/core';
import { Customer } from '../model/customer';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
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
        
      if (response) {
        this.customerService.isLoggedIn = true;
      } else {
        this.customerService.isLoggedIn = false;
      }
    });


    
    this.router.navigate(['']);
  }
}
