import {Component, Inject} from '@angular/core';
import {TuiDialogContext} from "@taiga-ui/core";
import {POLYMORPHEUS_CONTEXT} from "@tinkoff/ng-polymorpheus";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-add-module-dialog',
    templateUrl: './add-module-dialog.component.html',
    styleUrls: ['./add-module-dialog.component.css']
})
export class AddModuleDialogComponent {

    constructor(
        @Inject(POLYMORPHEUS_CONTEXT)
        private readonly context: TuiDialogContext<string, string>,
    ) {
    }
    moduleNameForm = new FormGroup({
        name: new FormControl('', Validators.required)
    })

    addModule(): void {
        if (this.moduleNameForm.valid) {
            this.context.completeWith(this.moduleNameForm.value.name!);
        }
    }
}
