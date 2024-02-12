import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {MainComponent} from './components/main/main.component';
import {TuiButtonModule, TuiDialogModule, TuiRootModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import {BrowserModule} from "@angular/platform-browser";
import {MainModule} from "./components/main/main.module";
import {AuthComponent} from "./components/login/auth.component";
import {TuiDataListWrapperModule, TuiInputModule, TuiSelectModule, TuiSliderModule} from "@taiga-ui/kit";
import {TUI_LANGUAGE, TUI_RUSSIAN_LANGUAGE} from '@taiga-ui/i18n';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {httpInterceptorProviders} from "./auth/auth-interceptor";
import {JwtModule} from "@auth0/angular-jwt";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {of} from "rxjs";
import { SelectFormDialogComponent } from './dialogs/select-form-dialog/select-form-dialog.component';
import {TuiMoneyModule} from "@taiga-ui/addon-commerce";
import {TuiAutoFocusModule} from "@taiga-ui/cdk";
import { AddModuleDialogComponent } from './dialogs/add-module-dialog/add-module-dialog.component';

export function tokenGetter() {
  return localStorage.getItem("token");
}


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AuthComponent,
    SelectFormDialogComponent,
    AddModuleDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TuiRootModule,
    MainModule,
    TuiInputModule,
    TuiButtonModule,
    TuiDialogModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      },
    }),
    TuiMoneyModule,
    TuiAutoFocusModule,
    TuiTextfieldControllerModule,
    FormsModule,
    TuiSelectModule,
    TuiDataListWrapperModule,
    TuiSliderModule
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
