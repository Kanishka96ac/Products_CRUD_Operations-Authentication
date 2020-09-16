import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProductsComponent } from './components/products/products.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UsersComponent } from './components/users/users.component';
import {AuthGuard} from '../app/auth/auth.guard'

const routes: Routes = [
  {path: "login" , component: SigninComponent},
  {path: "register", component: SignupComponent},
  {path: "nav", component: NavigationComponent},
  {path: "home", component: HomeComponent , canActivate : [AuthGuard]},
  {path: "users", component: UsersComponent , canActivate : [AuthGuard]},
  {path: "products", component: ProductsComponent , canActivate : [AuthGuard]},

  {path : "", redirectTo: "/login" , pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
