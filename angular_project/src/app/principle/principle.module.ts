import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipleRoutingModule } from './principle-routing.module';
import { PrincipleHomeComponent } from './principle-home/principle-home.component';
import { PrincipleSignupFormComponent} from './principle-signup/principle-signup.component';
import { PrincipleLogginComponent } from './principle-loggin/principle-loggin.component';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PrincipleHomeComponent,
    PrincipleSignupFormComponent,
    PrincipleLogginComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    PrincipleRoutingModule,
   SharedModule

  ]
})
export class PrincipleModule { }
