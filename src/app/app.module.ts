import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {MainComponent} from './components/main/main.component';
import {TuiButtonModule, TuiRootModule} from "@taiga-ui/core";
import {BrowserModule} from "@angular/platform-browser";
import {MainModule} from "./components/main/main.module";
import {AuthComponent} from "./components/auth/auth.component";
import {TuiInputModule} from "@taiga-ui/kit";


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AuthComponent
  ],
  imports: [BrowserModule, AppRoutingModule, TuiRootModule, MainModule, TuiInputModule, TuiButtonModule],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
