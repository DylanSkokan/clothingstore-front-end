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
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { ViewShirtComponent } from './view-shirt/view-shirt.component';
import { ViewPantsComponent } from './view-pants/view-pants.component';
import { ViewShoesComponent } from './view-shoes/view-shoes.component';
import { ViewHatComponent } from './view-hat/view-hat.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';


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
  { path: 'view-product', component: ViewProductComponent},
  { path: 'product-shirts/view-shirt/:productId', component: ViewShirtComponent},
  { path: 'product-pants/view-pants/:productId', component: ViewPantsComponent},
  { path: 'product-shoes/view-shoes/:productId', component: ViewShoesComponent},
  { path: 'product-hats/view-hat/:productId', component: ViewHatComponent},
  
  { path: 'shopping-cart', component: ShoppingCartComponent},
  { path: 'product-item', component: ProductItemComponent},
  { path: 'userAccount', component: UserAccountComponent},
  { path: 'checkoutPage', component: CheckoutPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
