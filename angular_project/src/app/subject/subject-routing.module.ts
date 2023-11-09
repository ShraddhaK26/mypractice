import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubLandingComponent } from './sub-landing/sub-landing.component';
import { Sub1Component } from './sub1/sub1.component';
import { Sub2Component } from './sub2/sub2.component';

const routes: Routes = [
  {path: 'SubLanding', component:SubLandingComponent},
  {path:'sub1',component:Sub1Component},
  {path:'sub2',component:Sub2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }
