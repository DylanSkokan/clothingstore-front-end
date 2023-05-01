import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  AccountCreationSuccessComponent
} from './account-creation-success/account-creation-success.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { CustomerLoginFormComponent } from './customer-login-form/customer-login-form.component';
import { CustomerSignupFormComponent } from './customer-signup-form/customer-signup-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { ProductHatsComponent } from './product-hats/product-hats.component';
import { ProductPantsComponent } from './product-pants/product-pants.component';
import { ProductShirtsComponent } from './product-shirts/product-shirts.component';
import { ProductShoesComponent } from './product-shoes/product-shoes.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { ViewHatComponent } from './view-hat/view-hat.component';
import { ViewPantsComponent } from './view-pants/view-pants.component';
import { ViewShirtComponent } from './view-shirt/view-shirt.component';
import { ViewShoesComponent } from './view-shoes/view-shoes.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'customer/login', component: CustomerLoginFormComponent },
  { path: 'customer/createCustomer', component: CustomerSignupFormComponent },
  { path: 'customer/accountCreationSuccess', component: AccountCreationSuccessComponent },
  { path: 'product-shirts', component: ProductShirtsComponent },
  { path: 'product-pants', component: ProductPantsComponent },
  { path: 'product-shoes', component: ProductShoesComponent },
  { path: 'product-hats', component: ProductHatsComponent },
  { path: 'product-shirts/view-shirt/:productId', component: ViewShirtComponent },
  { path: 'product-pants/view-pants/:productId', component: ViewPantsComponent },
  { path: 'product-shoes/view-shoes/:productId', component: ViewShoesComponent },
  { path: 'product-hats/view-hat/:productId', component: ViewHatComponent },

  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'userAccount', component: UserAccountComponent },
  { path: 'checkoutPage', component: CheckoutPageComponent },

  { path: 'orderConfirmation', component: OrderConfirmationComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
