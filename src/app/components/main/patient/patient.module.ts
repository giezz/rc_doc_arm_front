import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PatientRoutingModule} from './patient-routing.module';
import {PatientDetailComponent} from './patient-detail/patient-detail.component';
import { EhrComponent } from './ehr/ehr.component';
import {TuiLabelModule} from "@taiga-ui/core";


@NgModule({
  declarations: [
    PatientDetailComponent,
    EhrComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    TuiLabelModule
  ]
})
export class PatientModule { }
