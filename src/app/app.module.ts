import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {
    TuiButtonModule,
    TuiDialogModule,
    TuiLabelModule,
    TuiLinkModule,
    TuiLoaderModule,
    TuiRootModule,
    TuiTextfieldControllerModule
} from "@taiga-ui/core";
import {TUI_LANGUAGE, TUI_RUSSIAN_LANGUAGE} from '@taiga-ui/i18n';
import {httpInterceptorProviders} from "./auth/auth-interceptor";
import {JwtModule} from "@auth0/angular-jwt";
import {of} from "rxjs";
import {HomeComponent} from './components/home/home.component';
import {HeaderComponent} from "./components/header/header.component";
import {TuiAvatarModule, TuiInputModule, TuiTabsModule} from "@taiga-ui/kit";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {AuthComponent} from "./components/login/auth.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PatientComponent} from './components/patient/patient.component';
import {PatientModule} from "./components/patient/patient.module";
import {RehabProgramComponent} from './components/rehab-program/rehab-program.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ModuleEditDialogComponent} from './dialogs/module-edit-dialog/module-edit-dialog.component';
import {AddExerciseDialogComponent} from './dialogs/add-exercise-dialog/add-exercise-dialog.component';
import {TuiAutoFocusModule, TuiLetModule} from "@taiga-ui/cdk";
import {ModulePreviewDialogComponent} from './dialogs/module-preview-dialog/module-preview-dialog.component';
import {FormPreviewDialogComponent} from './dialogs/form-preview-dialog/form-preview-dialog.component';
import {FormResultsDialogComponent} from './dialogs/form-results-dialog/form-results-dialog.component';
import {SharedModule} from "./components/shared/shared.module";
import {ProtocolAddResultDialog} from "./dialogs/protocol-add-result-dialog/protocol-add-result-dialog.component";
import {AddFormDialogComponent} from "./dialogs/add-form-dialog/add-form-dialog.component";
import {AddModuleDialogComponent} from "./dialogs/add-module-dialog/add-module-dialog.component";
import {NotfoundComponent} from './components/notfound/notfound.component';
import {TuiBlockStatusModule} from "@taiga-ui/layout";
import {registerLocaleData} from "@angular/common";
import localeRu from '@angular/common/locales/ru';

export function tokenGetter() {
    return localStorage.getItem("token");
}

registerLocaleData(localeRu);

@NgModule({
    declarations: [
        AppComponent,
        AuthComponent,
        HomeComponent,
        HeaderComponent,
        PatientComponent,
        RehabProgramComponent,
        ModuleEditDialogComponent,
        AddExerciseDialogComponent,
        AddFormDialogComponent,
        AddModuleDialogComponent,
        ModulePreviewDialogComponent,
        FormPreviewDialogComponent,
        FormResultsDialogComponent,
        ProtocolAddResultDialog,
        NotfoundComponent
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
        TuiDialogModule,
        TuiRootModule,
        TuiAvatarModule,
        TuiInputModule,
        ReactiveFormsModule,
        TuiButtonModule,
        PatientModule,
        TuiTabsModule,
        TuiLoaderModule,
        TuiAutoFocusModule,
        TuiLetModule,
        TuiTextfieldControllerModule,
        TuiLinkModule,
        FormsModule,
        TuiLabelModule,
        SharedModule,
        TuiBlockStatusModule
    ],
    exports: [RouterModule],
    providers: [
        httpInterceptorProviders,
        {
            provide: TUI_LANGUAGE,
            useValue: of(TUI_RUSSIAN_LANGUAGE),
        },
        {
            provide: LOCALE_ID, useValue: "ru"
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
