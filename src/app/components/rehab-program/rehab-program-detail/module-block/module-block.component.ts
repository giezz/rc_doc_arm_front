import {Component, EventEmitter, inject, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Module} from "../../../../models/module";
import {PolymorpheusContent} from "@tinkoff/ng-polymorpheus";
import {TuiDialogContext, TuiDialogService} from "@taiga-ui/core";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-module-block',
    templateUrl: './module-block.component.html',
    styleUrls: ['./module-block.component.css']
})
export class ModuleBlockComponent implements OnInit, OnDestroy {

    @Input("module")
    module: Module;

    @Input("index")
    index: number;

    @Input()
    editable: boolean = true;

    @Output()
    onDeleteButtonPressed = new EventEmitter<number>();

    deleteButtonPressed(moduleId: number) {
        this.onDeleteButtonPressed.emit(moduleId);
    }

    private dialogService = inject(TuiDialogService);


    subscription: Subscription = new Subscription();

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    showModuleEditDialog(content: PolymorpheusContent<TuiDialogContext>): void {
        this.subscription.add(this.dialogService.open(content,
            {
                size: "auto",
                dismissible: false
            }
        ).subscribe());
    }

    showModulePreviewDialog(content: PolymorpheusContent<TuiDialogContext>) {
        this.subscription.add(this.dialogService.open(content,
            {
                size: "auto"
            }
        ).subscribe());
    }

}
