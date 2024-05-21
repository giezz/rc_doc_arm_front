import {Component, inject, Injector, OnDestroy, OnInit} from '@angular/core';
import {RehabProgramService} from "../../../services/rehab-program.service";
import {RehabProgram} from "../../../models/rehab-program";
import {Subscription} from "rxjs";
import {TuiDialogService} from "@taiga-ui/core";
import {AddFormDialogComponent} from "../../../dialogs/add-form-dialog/add-form-dialog.component";
import {AddModuleDialogComponent} from "../../../dialogs/add-module-dialog/add-module-dialog.component";
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {RehabProgramComponentsService} from "../../../services/components/rehab-program-components.service";
import {TuiStatus} from "@taiga-ui/kit";

@Component({
    selector: 'app-rehab-program-detail',
    templateUrl: './rehab-program-detail.component.html',
    styleUrls: ['./rehab-program-detail.component.css', '../../../app.component.css']
})
export class RehabProgramDetailComponent implements OnInit, OnDestroy {

    private rehabProgramComponentsService: RehabProgramComponentsService = inject(RehabProgramComponentsService);
    private rehabProgramService: RehabProgramService = inject(RehabProgramService);
    private dialogService = inject(TuiDialogService);
    private injector: Injector = inject(Injector);

    private readonly formSelectionDialog = this.dialogService.open<number>(
        new PolymorpheusComponent(AddFormDialogComponent, this.injector),
        {
            dismissible: true,
            label: 'Добавление анкеты',
            size: "auto"
        },
    );

    private readonly addModuleDialog = this.dialogService.open<string>(
        new PolymorpheusComponent(AddModuleDialogComponent, this.injector),
        {
            dismissible: true,
            label: 'Добавление модуля',
            size: "auto"
        },
    );

    rehabProgram: RehabProgram;
    isLoaded: boolean = false;
    hasProgram: boolean = false;
    status: TuiStatus;
    value: string;
    subscription: Subscription = new Subscription();

    ngOnInit(): void {
        this.getRehabProgram();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    deleteForm(formId: number) {
        this.subscription.add(this.rehabProgramService.deleteForm(this.rehabProgram.id, formId).subscribe(
                program => {
                    this.rehabProgram = program;
                    this.rehabProgramComponentsService.setProgram(program);
                }
            )
        );
    }

    deleteModule(moduleId: number) {
        this.subscription.add(this.rehabProgramService.deleteModule(this.rehabProgram.id, moduleId).subscribe(
                program => {
                    this.rehabProgram = program;
                    this.rehabProgramComponentsService.setProgram(program);
                }
            )
        );
    }

    getRehabProgram() {
        this.subscription.add(this.rehabProgramComponentsService.program$.subscribe(
                {
                    next: program => {
                        if (program != null) {
                            this.rehabProgram = program;
                            this.rehabProgram.modules.sort((a, b) => a.id - b.id)
                            this.hasProgram = true;
                            this.isLoaded = true;
                            this.resolveStatus();
                        } else {
                            this.hasProgram = false
                            this.isLoaded = true;
                        }

                    }
                }
            )
        )
    }

    showAddModuleDialog() {
        this.subscription.add(this.addModuleDialog.subscribe({
                    next: name => {
                        this.subscription.add(this.rehabProgramService.addModule(name, this.rehabProgram.id).subscribe(
                                program => {
                                    this.rehabProgram = program;
                                    this.rehabProgramComponentsService.setProgram(program);
                                }
                            )
                        );
                    },
                    complete: () => {
                        console.info('Dialog closed');
                    },
                }
            )
        );
    }

    showAddFormDialog(formType: string) {
        this.subscription.add(this.formSelectionDialog.subscribe(
                formId => {
                    this.subscription.add(this.rehabProgramService.addForm(
                            this.rehabProgram.id,
                            formId,
                            formType
                        ).subscribe(
                            program => {
                                this.rehabProgram = program;
                                this.rehabProgramComponentsService.setProgram(program);
                            }
                        )
                    );
                }
            )
        );
    }

    resolveStatus() {
        if (this.rehabProgram.isCurrent) {
            this.status = "primary";
            this.value = "Текущая";
        } else {
            this.status = "success";
            this.value = "Завершена";
        }
    }

}
