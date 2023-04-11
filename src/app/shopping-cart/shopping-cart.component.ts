import { Component, OnInit } from '@angular/core';
import { } from '@fortawesome/angular-fontawesome';
import { CartService } from 'src/app/cart.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item : any){
    this.cartService.removeCartItem(item);
  }

  emptyCart(){
    this.cartService.removeAllItems();
  }
}
