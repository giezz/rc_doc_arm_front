import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PatientRoutingModule} from './patient-routing.module';
import {PatientDetailsComponent} from './patient-details/patient-details.component';
import {TuiTabsModule} from "@taiga-ui/kit";
import {TuiButtonModule, TuiLabelModule} from "@taiga-ui/core";
import {RehabProgramComponent} from "./rehab-program/rehab-program.component";


@NgModule({
  declarations: [
    RehabProgramComponent,
    PatientDetailsComponent
  ],
    imports: [
        CommonModule,
        PatientRoutingModule,
        TuiTabsModule,
        TuiLabelModule,
        TuiButtonModule
    ]
})
export class PatientModule { }
