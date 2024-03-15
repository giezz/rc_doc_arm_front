import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {PatientsComponent} from './patients/patients.component';
import {RehabProgramsListComponent} from './rehab-programs-list/rehab-programs-list.component';
import {PagesComponent} from './pages.component';
import {NavigationComponent} from './navigation/navigation.component';
import {
    TuiBadgeModule,
    TuiCheckboxLabeledModule,
    TuiDataListWrapperModule,
    TuiFieldErrorPipeModule,
    TuiInputDateModule,
    TuiInputModule,
    TuiMultiSelectModule,
    TuiSelectModule,
    TuiTabsModule
} from "@taiga-ui/kit";
import {ReactiveFormsModule} from "@angular/forms";
import {
    TuiButtonModule, TuiDataListModule,
    TuiErrorModule,
    TuiHostedDropdownModule,
    TuiLabelModule,
    TuiTextfieldControllerModule
} from "@taiga-ui/core";
import {TuiTableModule} from "@taiga-ui/addon-table";
import {TuiLetModule} from "@taiga-ui/cdk";
import {RehabDetailCardComponent} from './rehab-programs-list/rehab-detail-card/rehab-detail-card.component';


@NgModule({
  declarations: [
    PatientsComponent,
    RehabProgramsListComponent,
    PagesComponent,
    NavigationComponent,
    RehabDetailCardComponent
  ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        TuiTabsModule,
        ReactiveFormsModule,
        TuiInputModule,
        TuiTextfieldControllerModule,
        TuiMultiSelectModule,
        TuiDataListWrapperModule,
        TuiSelectModule,
        TuiInputDateModule,
        TuiErrorModule,
        TuiCheckboxLabeledModule,
        TuiFieldErrorPipeModule,
        TuiTableModule,
        TuiLetModule,
        TuiBadgeModule,
        TuiButtonModule,
        TuiLabelModule,
        TuiHostedDropdownModule,
        TuiDataListModule
    ]
})
export class PagesModule { }
