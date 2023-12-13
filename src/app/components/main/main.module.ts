import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {PagesComponent} from './pages/pages.component';
import {HomeComponent} from "./home/home.component";
import {PagesModule} from "./pages/pages.module";
import {HeaderComponent} from "./header/header.component";
import {PatientComponent} from "./patient/patient.component";
import {TuiAvatarModule, TuiTabsModule} from "@taiga-ui/kit";
import {TuiButtonModule} from "@taiga-ui/core";
import { RehabProgramComponent } from './rehab-program/rehab-program.component';


@NgModule({
  declarations: [
    HomeComponent,
    PagesComponent,
    HeaderComponent,
    PatientComponent,
    RehabProgramComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    PagesModule,
    TuiTabsModule,
    TuiAvatarModule,
    TuiButtonModule,
  ]
})
export class MainModule {
}
