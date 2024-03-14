import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PatientsComponent } from './patients/patients.component';
import { MyPatientsComponent } from './my-patients/my-patients.component';
import { PagesComponent } from './pages.component';
import { NavigationComponent } from './navigation/navigation.component';
import {
  TuiBadgeModule,
  TuiCheckboxLabeledModule,
  TuiDataListWrapperModule, TuiFieldErrorPipeModule, TuiInputDateModule,
  TuiInputModule,
  TuiMultiSelectModule,
  TuiSelectModule,
  TuiTabsModule
} from "@taiga-ui/kit";
import {ReactiveFormsModule} from "@angular/forms";
import {TuiButtonModule, TuiErrorModule, TuiLabelModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import {TuiTableModule} from "@taiga-ui/addon-table";
import {TuiLetModule} from "@taiga-ui/cdk";
import { MyPatientsListComponent } from './my-patients/my-patients-list/my-patients-list.component';
import { RehabProgramsComponent } from './my-patients/rehab-programs/rehab-programs.component';
import { RehabDetailCardComponent } from './my-patients/rehab-programs/rehab-detail-card/rehab-detail-card.component';


@NgModule({
  declarations: [
    PatientsComponent,
    MyPatientsComponent,
    PagesComponent,
    NavigationComponent,
    MyPatientsListComponent,
    RehabProgramsComponent,
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
        TuiLabelModule
    ]
})
export class PagesModule { }
