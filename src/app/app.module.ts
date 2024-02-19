import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ActivatedRoute, RouterModule} from "@angular/router";
import {TuiButtonModule, TuiDialogModule, TuiRootModule} from "@taiga-ui/core";
import {TUI_LANGUAGE, TUI_RUSSIAN_LANGUAGE} from '@taiga-ui/i18n';
import {httpInterceptorProviders} from "./auth/auth-interceptor";
import {JwtModule} from "@auth0/angular-jwt";
import {of} from "rxjs";
import { HomeComponent } from './components/home/home.component';
import {HeaderComponent} from "./components/header/header.component";
import {TuiAvatarModule, TuiInputModule, TuiTabsModule} from "@taiga-ui/kit";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {AuthComponent} from "./components/login/auth.component";
import {ReactiveFormsModule} from "@angular/forms";
import { PatientComponent } from './components/patient/patient.component';
import {PatientModule} from "./components/patient/patient.module";
import { RehabProgramComponent } from './components/rehab-program/rehab-program.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    HeaderComponent,
    PatientComponent,
    RehabProgramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      }
    }),
    BrowserAnimationsModule,
    NoopAnimationsModule,
    TuiDialogModule,
    TuiRootModule,
    TuiAvatarModule,
    TuiInputModule,
    ReactiveFormsModule,
    TuiButtonModule,
    PatientModule,
    TuiTabsModule
  ],
  exports: [RouterModule],
  providers: [
    httpInterceptorProviders,
    {
      provide: TUI_LANGUAGE,
      useValue: of(TUI_RUSSIAN_LANGUAGE),
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
