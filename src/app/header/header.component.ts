import { Subject, takeUntil } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CustomerService } from '../service/customer.service';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    public customerService: CustomerService,
    private cartService: CartService) { }

  private unsubscribe = new Subject<void>();
  public totalItems: number = 0;
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
