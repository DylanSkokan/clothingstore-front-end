import { Component, OnInit } from '@angular/core';
import { } from '@fortawesome/angular-fontawesome';
import { Product } from '../model/product';
import { ShoppingcartService } from '../service/shoppingcart.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{

  constructor(
    private shoppingcartService: ShoppingcartService) { 
      
    }

  cart: Product []

  ngOnInit(): void {
    this.cart = this.shoppingcartService.getCart()
  }

}
