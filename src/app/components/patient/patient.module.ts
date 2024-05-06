import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PatientRoutingModule} from './patient-routing.module';
import {PatientDetailComponent} from './patient-detail/patient-detail.component';
import {TuiLetModule} from "@taiga-ui/cdk";
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiHostedDropdownModule,
    TuiLabelModule,
    TuiLoaderModule,
    TuiNotificationModule
} from "@taiga-ui/core";
import {EmcComponent} from './emc/emc.component';
import {TuiBadgeModule} from "@taiga-ui/kit";
import {SharedModule} from "../shared/shared.module";
import {RehabProgramsComponent} from './rehab-programs/rehab-programs.component';
import {RehabProgramDetailComponent} from './rehab-programs/rehab-program-detail/rehab-program-detail.component';
import {TuiBlockStatusModule} from "@taiga-ui/layout";


@NgModule({
    declarations: [
        PatientDetailComponent,
        EmcComponent,
        RehabProgramsComponent,
        RehabProgramDetailComponent
    ],
    exports: [
        PatientDetailComponent
    ],
    imports: [
        CommonModule,
        PatientRoutingModule,
        TuiLetModule,
        TuiLabelModule,
        TuiBadgeModule,
        SharedModule,
        TuiNotificationModule,
        TuiButtonModule,
        TuiDataListModule,
        TuiHostedDropdownModule,
        TuiBlockStatusModule,
        TuiLoaderModule
    ]
})
export class PatientModule {
}
