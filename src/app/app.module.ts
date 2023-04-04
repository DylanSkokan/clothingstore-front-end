import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerSignupFormComponent } from './customer-signup-form/customer-signup-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { CustomerLoginFormComponent } from './customer-login-form/customer-login-form.component';
import { AccountCreationSuccessComponent } from './account-creation-success/account-creation-success.component';
import { HeaderComponent } from './header/header.component';
import { ProductShirtsComponent } from './product-shirts/product-shirts.component';
import { ProductPantsComponent } from './product-pants/product-pants.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ProductShoesComponent } from './product-shoes/product-shoes.component';
import { ProductHatsComponent } from './product-hats/product-hats.component';
import { FooterComponent } from './footer/footer.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductItemComponent } from './product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerSignupFormComponent,
    HomePageComponent,
    CustomerLoginFormComponent,
    AccountCreationSuccessComponent,
    HeaderComponent,
    ProductShirtsComponent,
    ProductPantsComponent,
    ViewProductComponent,
    ProductShoesComponent,
    ProductHatsComponent
    FooterComponent,
    ShoppingCartComponent,
    ProductItemComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
