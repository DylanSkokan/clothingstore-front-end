import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerSignupFormComponent } from './customer-signup-form/customer-signup-form.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [  
  { path: '', component: HomePageComponent },
  { path: 'customer/all', component: CustomerListComponent },
  { path: 'customer/save', component: CustomerSignupFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
