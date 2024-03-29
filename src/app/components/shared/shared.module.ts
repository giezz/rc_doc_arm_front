import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormCardComponent} from "./form-card/form-card.component";
import {TuiLabelModule, TuiLinkModule} from "@taiga-ui/core";
import {ProgramFormResultCardComponent} from "./program-form-result-card/program-form-result-card.component";
import { ModuleFormResultCardComponent } from './module-form-result-card/module-form-result-card.component';

@NgModule({
    declarations: [
        FormCardComponent,
        ProgramFormResultCardComponent,
        ModuleFormResultCardComponent
    ],
    imports: [
        CommonModule,
        TuiLabelModule,
        TuiLinkModule
    ],
    exports: [
        FormCardComponent,
        ProgramFormResultCardComponent,
        ModuleFormResultCardComponent
    ]
})
export class SharedModule {
}
