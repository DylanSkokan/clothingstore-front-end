import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service'; 
import { CartService } from 'src/app/cart.service';
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

  public productList : any;
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private customerService: CustomerService,
        private api : ApiService, private cartService : CartService)
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

  ngOnInit(): void {
    this.api.getAllProducts().subscribe(res=>{
      this.productList = res;

      this.productList.forEach((a : any) =>{
        Object.assign(a, {quantity:1, total:a.price});
      })
    })

  addToCart(item : any){
    this.cartService.addToCart(item)
    
    this.router.navigate(['']);

  }
}
