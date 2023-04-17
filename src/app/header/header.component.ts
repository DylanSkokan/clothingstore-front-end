import { Component } from '@angular/core';
import { SessionService } from '../service/session.service';
import { CustomerService } from '../service/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { Subject, takeUntil } from 'rxjs';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private unsubscribe = new Subject<void>();
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private sessionService: SessionService,
        public customerService: CustomerService,
        private cartService : CartService) {}

    public totalItems : number = 0;
    public username: string = 'Account';

  ngOnInit(): void {
    this.totalItems = this.cartService.getCartSize()

    this.cartService.getCartUpdated()
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(() => {
      this.totalItems = this.cartService.getCartSize();
    });

    this.customerService.customer$.subscribe(user => {
      if (user) {
        this.username = user.username;
      } else {
        this.username = 'Account';
      }
    });
  }
}
