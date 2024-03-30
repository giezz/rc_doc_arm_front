import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FormCardComponent} from "./form-card/form-card.component";
import {TuiLabelModule, TuiLinkModule} from "@taiga-ui/core";
import {ProgramFormResultCardComponent} from "./program-form-result-card/program-form-result-card.component";
import { ModuleFormResultCardComponent } from './module-form-result-card/module-form-result-card.component';
import { ExerciseCardComponent } from './exercise-card/exercise-card.component';
import {TuiAvatarModule} from "@taiga-ui/kit";

@NgModule({
    declarations: [
        FormCardComponent,
        ProgramFormResultCardComponent,
        ModuleFormResultCardComponent,
        ExerciseCardComponent
    ],
    imports: [
        CommonModule,
        TuiLabelModule,
        TuiLinkModule,
        TuiAvatarModule,
        NgOptimizedImage
    ],
    exports: [
        FormCardComponent,
        ProgramFormResultCardComponent,
        ModuleFormResultCardComponent,
        ExerciseCardComponent
    ]
})
export class SharedModule {
}
