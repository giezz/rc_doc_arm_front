import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {PagesComponent} from './pages/pages.component';
import {HomeComponent} from "./home/home.component";
import {PagesModule} from "./pages/pages.module";
import {HeaderComponent} from "./header/header.component";
import {PatientComponent} from "./patient/patient.component";
import {TuiTabsModule} from "@taiga-ui/kit";


@NgModule({
  declarations: [
    HomeComponent,
    PagesComponent,
    HeaderComponent,
    PatientComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    PagesModule,
    TuiTabsModule,
  ]
})
export class MainModule {
}
