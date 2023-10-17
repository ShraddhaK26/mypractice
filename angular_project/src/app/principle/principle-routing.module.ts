import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipleHomeComponent } from './principle-home/principle-home.component';
import { psignupFormComponent } from './principle-signup/principle-signup.component';


const routes: Routes = [
  { path:'principleHome', component : PrincipleHomeComponent},

  { path : 'signUp', component:psignupFormComponent},

  {path: 'principleHome', component:PrincipleHomeComponent},
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipleRoutingModule { }
