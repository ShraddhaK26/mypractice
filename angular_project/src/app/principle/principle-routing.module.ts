import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipleHomeComponent } from './principle-home/principle-home.component';
import { PrincipleSignupFormComponent } from './principle-signup/principle-signup.component';
import {PrincipleLogginComponent} from './principle-loggin/principle-loggin.component'
import { SuccefullLoginComponent } from '../succefull-login/succefull-login.component';

const routes: Routes = [
  { path:'principleHome', component : PrincipleHomeComponent},

  { path : 'signUp', component:PrincipleSignupFormComponent},

  {path: 'principleHome', component:PrincipleHomeComponent},

  {path: 'Login',component:PrincipleLogginComponent },
  {path: 'loginsucess', component:SuccefullLoginComponent},
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipleRoutingModule { }
