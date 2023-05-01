import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  AccountCreationSuccessComponent
} from './account-creation-success/account-creation-success.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { CustomerLoginFormComponent } from './customer-login-form/customer-login-form.component';
import { CustomerSignupFormComponent } from './customer-signup-form/customer-signup-form.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { ProductHatsComponent } from './product-hats/product-hats.component';
import { ProductPantsComponent } from './product-pants/product-pants.component';
import { ProductShirtsComponent } from './product-shirts/product-shirts.component';
import { ProductShoesComponent } from './product-shoes/product-shoes.component';
import { ProductReviewComponent } from './review/review.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { ViewHatComponent } from './view-hat/view-hat.component';
import { ViewPantsComponent } from './view-pants/view-pants.component';
import { ViewShirtComponent } from './view-shirt/view-shirt.component';
import { ViewShoesComponent } from './view-shoes/view-shoes.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerSignupFormComponent,
    HomePageComponent,
    CustomerLoginFormComponent,
    AccountCreationSuccessComponent,
    HeaderComponent,
    ProductShirtsComponent,
    ProductPantsComponent,
    ProductShoesComponent,
    ProductHatsComponent,
    FooterComponent,
    ShoppingCartComponent,
    ProductReviewComponent,
    UserAccountComponent,
    ViewShirtComponent,
    ViewPantsComponent,
    ViewShoesComponent,
    ViewHatComponent,
    CheckoutPageComponent,
    OrderConfirmationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
