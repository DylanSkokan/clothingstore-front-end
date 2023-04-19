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

  public productList : Product[] = [];
  public pantsList : Pants[];
  public hatList : Hat[];
  public shirtList : Shirt[];
  public shoesList : Shoe[];

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
    this.productService.getHats().subscribe(hats=>{
      this.hatList = hats as unknown as Hat[];
      this.hatList.forEach(hat => {
        hat.prodType = 'hat';
      });
      this.productList = this.productList.concat(this.hatList);
    })

    this.productService.getPants().subscribe(pants=>{
      this.pantsList = pants as unknown as Pants[];
      this.pantsList.forEach(pants => {
        pants.prodType = 'pants';
      });
      this.productList = this.productList.concat(this.pantsList);
    })

    this.productService.getShirts().subscribe(shirts=>{
      this.shirtList = shirts as unknown as Shirt[];
      this.shirtList.forEach(shirts => {
        shirts.prodType = 'shirt';
      });
      this.productList = this.productList.concat(this.shirtList);
    })

    this.productService.getShoes().subscribe(shoes=>{
      this.shoesList = shoes as unknown as Shoe[];
      this.shoesList.forEach(shoes => {
        shoes.prodType = 'shoes';
      });
      this.productList = this.productList.concat(this.shoesList);
    })
  }

  seeDetails(product: Product) {
    switch (product.prodType) {
      case 'shirt':
        this.router.navigate(['product-shirts/view-shirt', product.productId]);
        break;
      case 'pants':
        this.router.navigate(['product-pants/view-pants', product.productId]);
        break;
      case 'hat':
        this.router.navigate(['product-hats/view-hat', product.productId]);
        break;
      case 'shoes':
        this.router.navigate(['product-shoes/view-shoes', product.productId]);
        break;
    }
  }

  addToCart(item : any){
    this.cartService.addToCart(item)
    
    this.router.navigate(['']);
  }
}
