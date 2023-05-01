/**
 * Logic and functionality regarding the page header with the cart, account,
 * sign in, log in, and log out buttons.
 *
 * @author Dylan Skokan, Isaiah Cuellar, Tom Waterman, Justin Pham, Kyle McClernon
 */
import { Subject, takeUntil } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';

import { Component } from '@angular/core';

import { CustomerService } from '../service/customer.service';

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

  /**
   * On initialization, needs to listen for changes in the cart size for
   * the cart button, and the account information in case they log out
   * or change their name.
   */
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
