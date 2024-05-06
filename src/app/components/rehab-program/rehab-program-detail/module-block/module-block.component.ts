import {Component, inject, Injector, Input, OnDestroy, OnInit} from '@angular/core';
import {Module} from "../../../../models/module";
import {PolymorpheusComponent} from "@tinkoff/ng-polymorpheus";
import {ModuleEditDialogComponent} from "../../../../dialogs/module-edit-dialog/module-edit-dialog.component";
import {TuiDialogService} from "@taiga-ui/core";
import {Observable, Subscription} from "rxjs";
import {ModulePreviewDialogComponent} from "../../../../dialogs/module-preview-dialog/module-preview-dialog.component";

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

    private dialogService = inject(TuiDialogService);
    private injector: Injector = inject(Injector);

    private moduleEditDialog: Observable<String>;
    private modulePreviewDialog: Observable<String>;

    subscription: Subscription = new Subscription();

    ngOnInit(): void {
        this.moduleEditDialog = this.dialogService.open<string>(
            new PolymorpheusComponent(ModuleEditDialogComponent, this.injector),
            {
                data: this.module.id,
                dismissible: false,
                closeable: true,
                size: 'page'
            }
        );
        this.modulePreviewDialog = this.dialogService.open<string>(
            new PolymorpheusComponent(ModulePreviewDialogComponent, this.injector),
            {
                data: this.module.id,
                dismissible: true,
                closeable: true,
                size: 'auto'
            }
        )
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    showModuleEditDialog(): void {
        const dialogSub$ = this.moduleEditDialog.subscribe();
        this.subscription.add(dialogSub$);
    }

    showModulePreviewDialog() {
        const dialogSub$ = this.modulePreviewDialog.subscribe();
        this.subscription.add(dialogSub$);
    }
}
