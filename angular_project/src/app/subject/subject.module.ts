import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { Sub1Component } from './sub1/sub1.component';
import { SubLandingComponent } from './sub-landing/sub-landing.component';
import { Sub2Component } from './sub2/sub2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Sub1Component,
    SubLandingComponent,
    Sub2Component
  ],
  imports: [
    CommonModule,
    SubjectRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SubjectModule { }
