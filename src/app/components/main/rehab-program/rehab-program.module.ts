import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RehabProgramRoutingModule } from './rehab-program-routing.module';
import { RehabDetailComponent } from './rehab-detail/rehab-detail.component';


@NgModule({
  declarations: [
    RehabDetailComponent
  ],
  imports: [
    CommonModule,
    RehabProgramRoutingModule
  ]
})
export class RehabProgramModule { }
