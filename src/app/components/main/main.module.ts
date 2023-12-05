import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {HeaderComponent} from "../header/header.component";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ExercisesComponent} from "./exercises/exercises.component";
import {IcfComponent} from "./icf/icf.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {PatientsComponent} from "./patients/patients.component";
import {TuiBadgeModule, TuiInputModule, TuiTabsModule} from "@taiga-ui/kit";
import {TuiButtonModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import {TuiTableModule} from "@taiga-ui/addon-table";
import {MyPatientsComponent} from "./my-patients/my-patients.component";
import {RehabProgramsComponent} from "./my-patients/rehab-programs/rehab-programs.component";
import {MyPatientsListComponent} from "./my-patients/my-patients-list/my-patients-list.component";
import {TuiLetModule} from "@taiga-ui/cdk";
import { PagesComponent } from './pages/pages.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ExercisesComponent,
    IcfComponent,
    NavigationComponent,
    PatientsComponent,
    MyPatientsComponent,
    RehabProgramsComponent,
    MyPatientsListComponent,
    PagesComponent
  ],
  exports: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiTableModule,
    TuiBadgeModule,
    TuiButtonModule,
    TuiTabsModule,
    TuiLetModule
  ]
})
export class MainModule {
}
