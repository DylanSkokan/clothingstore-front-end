import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerSignupFormComponent } from './customer-signup-form/customer-signup-form.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CustomerLoginFormComponent } from './customer-login-form/customer-login-form.component';
import { AccountCreationSuccessComponent } from './account-creation-success/account-creation-success.component';
import { ProductShirtsComponent } from './product-shirts/product-shirts.component';
import { ProductPantsComponent } from './product-pants/product-pants.component';
import { ViewEncapsulation } from '@angular/compiler';
import { ViewProductComponent } from './view-product/view-product.component';
import { ProductShoesComponent } from './product-shoes/product-shoes.component';
import { ProductHatsComponent } from './product-hats/product-hats.component';

const routes: Routes = [  
  { path: '', component: HomePageComponent },
  { path: 'customer/all', component: CustomerListComponent },
  { path: 'customer/login', component: CustomerLoginFormComponent },
  { path: 'customer/createCustomer', component: CustomerSignupFormComponent },
  { path: 'customer/accountCreationSuccess', component: AccountCreationSuccessComponent },
  { path: 'product-shirts', component: ProductShirtsComponent },
  { path: 'product-pants', component: ProductPantsComponent },
  { path: 'product-shoes', component: ProductShoesComponent },
  { path: 'product-hats', component: ProductHatsComponent },
  { path: 'view-product', component: ViewProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
