import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipleRoutingModule } from './principle-routing.module';
import { PrincipleHomeComponent } from './principle-home/principle-home.component';
import { PrincipleSignupFormComponent} from './principle-signup/principle-signup.component';
import { PrincipleLogginComponent } from './principle-loggin/principle-loggin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PrincipleHomeComponent,
    PrincipleSignupFormComponent,
    PrincipleLogginComponent
  ],
  imports: [
    CommonModule,
    PrincipleRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class PrincipleModule { }
