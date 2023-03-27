import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerSignupFormComponent } from './customer-signup-form/customer-signup-form.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CustomerLoginFormComponent } from './customer-login-form/customer-login-form.component';
import { AccountCreationSuccessComponent } from './account-creation-success/account-creation-success.component';

const routes: Routes = [  
  { path: '', component: HomePageComponent },
  { path: 'customer/all', component: CustomerListComponent },
  { path: 'customer/login', component: CustomerLoginFormComponent },
  { path: 'customer/createCustomer', component: CustomerSignupFormComponent },
  { path: 'customer/accountCreationSuccess', component: AccountCreationSuccessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
