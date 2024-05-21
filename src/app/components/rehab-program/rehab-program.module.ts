import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

import {RehabProgramRoutingModule} from './rehab-program-routing.module';
import {RehabProgramDetailComponent} from './rehab-program-detail/rehab-program-detail.component';
import {TuiAutoFocusModule, TuiLetModule} from "@taiga-ui/cdk";
import {
    TuiButtonModule, TuiDataListModule, TuiHostedDropdownModule,
    TuiLabelModule,
    TuiLinkModule,
    TuiLoaderModule,
    TuiNotificationModule,
    TuiTextfieldControllerModule
} from "@taiga-ui/core";
import {
    TuiAccordionModule, TuiAvatarModule,
    TuiBadgeModule, TuiCheckboxModule, TuiDataListWrapperModule,
    TuiInputDateRangeModule,
    TuiInputModule, TuiSelectModule,
    TuiTextareaModule
} from "@taiga-ui/kit";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormBlockComponent} from './rehab-program-detail/form-block/form-block.component';
import {ModuleBlockComponent} from './rehab-program-detail/module-block/module-block.component';
import {RehabProgramResultsComponent} from './rehab-program-results/rehab-program-results.component';
import {ProtocolComponent} from './protocol/protocol.component';
import {TuiAxesModule, TuiLineChartModule, TuiLineDaysChartModule} from "@taiga-ui/addon-charts";
import {SharedModule} from "../shared/shared.module";
import { ModuleEditComponent } from './rehab-program-detail/module-block/module-edit/module-edit.component';
import {PagesModule} from "../pages/pages.module";
import { CreateProtocolDialogComponent } from './protocol/create-protocol-dialog/create-protocol-dialog.component';


@NgModule({
    declarations: [
        RehabProgramDetailComponent,
        FormBlockComponent,
        ModuleBlockComponent,
        RehabProgramResultsComponent,
        ProtocolComponent,
        ModuleEditComponent,
        CreateProtocolDialogComponent
    ],
    exports: [
        RehabProgramDetailComponent
    ],
    imports: [
        CommonModule,
        RehabProgramRoutingModule,
        TuiLetModule,
        TuiButtonModule,
        TuiInputModule,
        TuiAutoFocusModule,
        TuiTextfieldControllerModule,
        FormsModule,
        TuiLabelModule,
        TuiLoaderModule,
        TuiLineDaysChartModule,
        TuiLineChartModule,
        TuiAxesModule,
        TuiInputDateRangeModule,
        TuiLinkModule,
        TuiTextareaModule,
        ReactiveFormsModule,
        SharedModule,
        TuiNotificationModule,
        TuiAccordionModule,
        TuiBadgeModule,
        TuiHostedDropdownModule,
        TuiDataListModule,
        TuiAvatarModule,
        PagesModule,
        TuiSelectModule,
        TuiDataListWrapperModule,
        TuiCheckboxModule
    ],
    providers: [
        DatePipe
    ]
})
export class RehabProgramModule {
}
