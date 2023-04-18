import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service'; 
import { CartService } from 'src/app/service/cart.service';
import { Customer } from '../model/customer';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';
import { ProductService } from '../service/product.service';
import { Product } from '../model/product';
import { Shirt } from '../model/shirt';
import { Pants } from '../model/pants';
import { Hat } from '../model/hat';
import { Shoe } from '../model/shoe';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  customer: Customer;

  public productList : any;
  public pantsList : any;
  public hatList : any;



  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private customerService: CustomerService,
        private productService: ProductService,
        private api : ApiService, private cartService : CartService)
        {
    this.customer = new Customer();
  }
  
  onSubmit() {
    this.customerService.login(this.customer.username, this.customer.password).subscribe(response => {
      console.log('HOME PAGE log in:' + response);
        
      if (response) {
        this.customerService.isLoggedIn = true;
      } else {
        this.customerService.isLoggedIn = false;
      }
    });
  }

  ngOnInit(): void {
     this.api.getAllProducts().subscribe(res=>{
      this.productList = res;

      this.productList.forEach((a : any) =>{
        Object.assign(a, {quantity:1, total:a.price});
      })
    })
  }

  seeDetails(product: Product) {
    console.log('in see details')
    console.log(product)
    console.log(product.prodType)
    switch (product.prodType) {
      case 'shirt':
        console.log('1')
        this.router.navigate(['product-shirts/view-shirt', product.productId]);
        break;
      case 'pants':
        console.log('2')
        this.router.navigate(['product-pants/view-pants', product.productId]);
        break;
      case 'hat':
        console.log('3')
        this.router.navigate(['product-hats/view-hat', product.productId]);
        break;
      case 'shoes':
        console.log('4')
        this.router.navigate(['product-shoes/view-shoes', product.productId]);
        break;
      default:
        // handle invalid product type
        break;
    }
  }

  addToCart(item : any){
    this.cartService.addToCart(item)
    
    this.router.navigate(['']);
  }
}
