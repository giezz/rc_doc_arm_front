import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {PatientsComponent} from './patients/patients.component';
import {RehabProgramsListComponent} from './rehab-programs-list/rehab-programs-list.component';
import {PagesComponent} from './pages.component';
import {NavigationComponent} from './navigation/navigation.component';
import {
    TuiAccordionModule,
    TuiBadgeModule,
    TuiCheckboxLabeledModule,
    TuiDataListWrapperModule,
    TuiFieldErrorPipeModule,
    TuiInputDateModule, TuiInputDateRangeModule,
    TuiInputModule,
    TuiMultiSelectModule, TuiRadioBlockModule,
    TuiSelectModule,
    TuiTabsModule, TuiTreeModule
} from "@taiga-ui/kit";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
    TuiButtonModule, TuiDataListModule,
    TuiErrorModule, TuiExpandModule, TuiGroupModule,
    TuiHostedDropdownModule,
    TuiLabelModule, TuiLoaderModule, TuiScrollbarModule,
    TuiTextfieldControllerModule
} from "@taiga-ui/core";
import {TuiTableModule, TuiTablePaginationModule} from "@taiga-ui/addon-table";
import {TuiLetModule} from "@taiga-ui/cdk";
import {RehabDetailCardComponent} from './rehab-programs-list/rehab-detail-card/rehab-detail-card.component';
import { ExercisesComponent } from './execrcises/exercises.component';
import {SharedModule} from "../shared/shared.module";
import { FormsComponent } from './forms/forms.component';
import { IcfComponent } from './icf/icf.component';


@NgModule({
    declarations: [
        PatientsComponent,
        RehabProgramsListComponent,
        PagesComponent,
        NavigationComponent,
        RehabDetailCardComponent,
        ExercisesComponent,
        FormsComponent,
        IcfComponent
    ],
    exports: [
        ExercisesComponent,
        FormsComponent,
        IcfComponent
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
        TuiDataListModule,
        SharedModule,
        FormsModule,
        TuiAccordionModule,
        TuiInputDateRangeModule,
        TuiExpandModule,
        TuiGroupModule,
        TuiTablePaginationModule,
        TuiRadioBlockModule,
        TuiTreeModule,
        TuiLoaderModule,
        TuiScrollbarModule
    ]
})
export class PagesModule { }
