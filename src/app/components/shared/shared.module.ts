import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormCardComponent} from "./form-card/form-card.component";
import {TuiLabelModule} from "@taiga-ui/core";


@NgModule({
    declarations: [
        FormCardComponent
    ],
    imports: [
        CommonModule,
        TuiLabelModule
    ],
    exports: [
        FormCardComponent
    ]
})
export class SharedModule {
}
