import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PatientRoutingModule} from './patient-routing.module';
import {PatientDetailComponent} from './patient-detail/patient-detail.component';
import { EhrComponent } from './ehr/ehr.component';


@NgModule({
  declarations: [
    PatientDetailComponent,
    EhrComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
