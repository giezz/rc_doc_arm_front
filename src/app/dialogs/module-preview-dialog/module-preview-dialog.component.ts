import {Component, Inject, inject, Injector, OnDestroy, OnInit} from '@angular/core';
import {ModuleService} from "../../services/module.service";
import {Module} from "../../models/module";
import {Observable, Subscription} from "rxjs";
import {POLYMORPHEUS_CONTEXT, PolymorpheusComponent} from "@tinkoff/ng-polymorpheus";
import {TuiDialogContext, TuiDialogService} from "@taiga-ui/core";
import {AddModuleDialogComponent} from "../add-module-dialog/add-module-dialog.component";
import {FormPreviewDialogComponent} from "../form-preview-dialog/form-preview-dialog.component";
import {FormResultsDialogComponent} from "../form-results-dialog/form-results-dialog.component";
import {ModuleForm} from "../../models/module-form";

@Component({
  selector: 'app-module-preview-dialog',
  templateUrl: './module-preview-dialog.component.html',
  styleUrls: ['./module-preview-dialog.component.css', '../../app.component.css']
})
export class ModulePreviewDialogComponent implements OnInit, OnDestroy {

    private moduleService: ModuleService = inject(ModuleService);
    private dialogService = inject(TuiDialogService);
    private injector: Injector = inject(Injector);

    private formPreviewDialog: Observable<void>;
    private formResultDialog: Observable<void>;

    constructor(
        @Inject(POLYMORPHEUS_CONTEXT) private readonly context: TuiDialogContext<number, number>,
    ) {}

    module: Module;
    isLoaded: boolean = false;
    subscription: Subscription = new Subscription();

    ngOnInit(): void {
        const sub$ = this.moduleService.getModuleById(this.data).subscribe(
            module => {
                this.module = module;
                this.isLoaded = true;
            }
        )
        this.subscription.add(sub$);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    get data(): number {
        return this.context.data
    }

    showFormDetailsDialog(formId: number) {
        this.formPreviewDialog = this.dialogService.open<void>(
            new PolymorpheusComponent(FormPreviewDialogComponent, this.injector),
            {
                data: formId,
                dismissible: true,
                closeable: true,
                size: 'auto'
            }
        );
        const sub$ = this.formPreviewDialog.subscribe();
        this.subscription.add(sub$);
    }

    showFormResultsDialog(moduleForm: ModuleForm) {
        this.formResultDialog = this.dialogService.open<void>(
            new PolymorpheusComponent(FormResultsDialogComponent, this.injector),
            {
                data: moduleForm,
                closeable: true,
                size: 'auto'
            }
        );
        const sub$ = this.formResultDialog.subscribe()
        this.subscription.add(sub$);
    }
}
