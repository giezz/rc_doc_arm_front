import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TuiButtonModule,
  TuiSvgModule,
  TuiTextfieldControllerModule, TuiLinkModule
} from "@taiga-ui/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PatientCardComponent} from './components/patient-card/patient-card.component';
import {TuiBadgeModule, TuiInputModule, TuiTabsModule, TuiTagModule} from "@taiga-ui/kit";
import {HomeComponent} from './components/home/home.component';
import {RouterModule, Routes} from "@angular/router";
import {PatientsComponent} from './components/patients/patients.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {ExercisesComponent} from './components/exercises/exercises.component';
import {FormsComponent} from './components/forms/forms.component';
import {IcfComponent} from './components/icf/icf.component';
import {AboutComponent} from './components/about/about.component';
import {MyPatientsComponent} from './components/my-patients/my-patients.component';
import { HeaderComponent } from './components/header/header.component';
import {TuiTableModule} from "@taiga-ui/addon-table";
import {TuiLetModule} from "@taiga-ui/cdk";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'patients', component: PatientsComponent},
  {path: 'my-patients', component: MyPatientsComponent},
  {path: 'exercises', component: ExercisesComponent},
  {path: 'froms', component: FormsComponent},
  {path: 'icf', component: IcfComponent},
  {path: 'about', component: AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PatientCardComponent,
    HomeComponent,
    PatientsComponent,
    NavigationComponent,
    ExercisesComponent,
    FormsComponent,
    IcfComponent,
    AboutComponent,
    MyPatientsComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiButtonModule,
    TuiTabsModule,
    TuiSvgModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiTableModule,
    TuiLinkModule,
    TuiLetModule,
    TuiTagModule,
    TuiBadgeModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
