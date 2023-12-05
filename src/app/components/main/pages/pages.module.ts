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
import {TuiBadgeModule, TuiInputModule, TuiTabsModule} from "@taiga-ui/kit";
import {TuiButtonModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import {TuiTableModule} from "@taiga-ui/addon-table";
import {TuiLetModule} from "@taiga-ui/cdk";


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
    TuiBadgeModule
  ]
})
export class PagesModule { }
