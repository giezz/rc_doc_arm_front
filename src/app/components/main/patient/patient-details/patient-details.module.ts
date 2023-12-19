import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PatientDetailsRoutingModule} from './patient-details-routing.module';
import {EhrComponent} from "./ehr/ehr.component";
import {PatientDetailComponent} from "./patient-detail/patient-detail.component";
import {TuiLabelModule} from "@taiga-ui/core";
import { RehabHistoryComponent } from './rehab-history/rehab-history.component';


@NgModule({
  declarations: [
    EhrComponent,
    PatientDetailComponent,
    RehabHistoryComponent
  ],
  imports: [
    CommonModule,
    PatientDetailsRoutingModule,
    TuiLabelModule
  ]
})
export class PatientDetailsModule {}
