import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { TestComponent } from './test/test.component';
import { PrincipleHomeComponent } from './principle/principle-home/principle-home.component';



const routes: Routes = [
  {path : '' , component: LandingComponent},
  { path: 'home', component : HomeComponent},
  { path : 'landing' , component: LandingComponent},
  {path: 'test', component:TestComponent},
 

  {path: 'Adminmodule', loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)},
  { path: 'PrincipleMod', loadChildren:()=>import ('./principle/principle.module').then(mod=>mod.PrincipleModule)}
  
  
 

  
  

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
