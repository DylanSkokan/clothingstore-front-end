import { Component } from '@angular/core';
import { SessionService } from '../service/session.service';
import { CustomerService } from '../service/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private sessionService: SessionService,
        public customerService: CustomerService,
        private cartService : CartService) {}

    public totalItems : number = 0;



  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItems = res.length;
    })
  }
}
