import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import {AboutComponent} from "./about/about.component";
import {ExercisesComponent} from "./exercises/exercises.component";
import {IcfComponent} from "./icf/icf.component";
import {MyPatientsComponent} from "./my-patients/my-patients.component";
import {MyPatientsListComponent} from "./my-patients/my-patients-list/my-patients-list.component";
import {RehabProgramsComponent} from "./my-patients/rehab-programs/rehab-programs.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {PatientsComponent} from "./patients/patients.component";
import {
  TuiBadgeModule, TuiCheckboxLabeledModule,
  TuiDataListWrapperModule, TuiFieldErrorPipeModule,
  TuiFilterModule, TuiInputDateModule,
  TuiInputModule,
  TuiMultiSelectModule, TuiSelectModule,
  TuiTabsModule
} from "@taiga-ui/kit";
import {
  TuiButtonModule,
  TuiDataListModule, TuiErrorModule,
  TuiHostedDropdownModule,
  TuiTextfieldControllerModule
} from "@taiga-ui/core";
import {TuiTableModule} from "@taiga-ui/addon-table";
import {TuiLetModule} from "@taiga-ui/cdk";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AboutComponent,
    ExercisesComponent,
    IcfComponent,
    MyPatientsComponent,
    MyPatientsListComponent,
    RehabProgramsComponent,
    NavigationComponent,
    PatientsComponent
  ],
  exports: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    TuiTabsModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiButtonModule,
    TuiTableModule,
    TuiLetModule,
    TuiBadgeModule,
    ReactiveFormsModule,
    TuiHostedDropdownModule,
    TuiDataListModule,
    FormsModule,
    TuiMultiSelectModule,
    TuiFilterModule,
    TuiDataListWrapperModule,
    TuiSelectModule,
    TuiInputDateModule,
    TuiErrorModule,
    TuiFieldErrorPipeModule,
    TuiCheckboxLabeledModule
  ]
})
export class PagesModule { }
