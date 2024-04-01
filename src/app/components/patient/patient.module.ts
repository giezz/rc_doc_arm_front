import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PatientRoutingModule} from './patient-routing.module';
import {PatientDetailComponent} from './patient-detail/patient-detail.component';
import {TuiLetModule} from "@taiga-ui/cdk";
import {TuiLabelModule} from "@taiga-ui/core";
import {EmcComponent} from './emc/emc.component';
import {RehabProgramsHistoryComponent} from './rehab-programs-history/rehab-programs-history.component';
import {TuiBadgeModule} from "@taiga-ui/kit";


@NgModule({
  declarations: [
    PatientDetailComponent,
    EmcComponent,
    RehabProgramsHistoryComponent
  ],
  exports: [
    PatientDetailComponent
  ],
    imports: [
        CommonModule,
        PatientRoutingModule,
        TuiLetModule,
        TuiLabelModule,
        TuiBadgeModule
    ]
})
export class PatientModule {
}
