import {Component, inject, Injector, OnDestroy, OnInit} from '@angular/core';
import {RehabProgramService} from "../../../services/rehab-program.service";
import {RehabProgram} from "../../../models/rehab-program";
import {Subscription} from "rxjs";
import {TuiDialogContext, TuiDialogService} from "@taiga-ui/core";
import {AddFormDialogComponent} from "../../../dialogs/add-form-dialog/add-form-dialog.component";
import {AddModuleDialogComponent} from "../../../dialogs/add-module-dialog/add-module-dialog.component";
import {PolymorpheusComponent, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {RehabProgramComponentsService} from "../../../services/components/rehab-program-components.service";
import {ProgramForm} from "../../../models/program-form";
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
        },
    );

    rehabProgram: RehabProgram;
    isLoaded: boolean = false;
    hasProgram: boolean = false;
    status: TuiStatus;
    value: string;
    subscription: Subscription = new Subscription();

    ngOnInit(): void {
        console.log('RehabProgramDetailComponent');
        this.getRehabProgram();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
        console.log('RehabProgramDetailComponent destroyed');
    }

    getRehabProgram() {
        const sub$ = this.rehabProgramComponentsService.program$.subscribe(
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
        this.subscription.add(sub$);
    }

    showAddModuleDialog() {
        const dialogSub$ = this.addModuleDialog.subscribe({
                next: name => {
                    const programSub$ = this.rehabProgramService.addModule(name, this.rehabProgram.id).subscribe(
                        program => {
                            this.rehabProgram = program;
                            this.rehabProgramComponentsService.setProgram(program);
                        }
                    )
                    this.subscription.add(programSub$);
                },
                complete: () => {
                    console.info('Dialog closed');
                },
            }
        )
        this.subscription.add(dialogSub$);
    }

    showAddFormDialog(formType: string) {
        const dialogSub$ = this.formSelectionDialog.subscribe({
                next: formId => {
                    console.info(`form id = ${formId}`);
                    const rehabSub$ = this.rehabProgramService.addForm(
                        this.rehabProgram.id,
                        formId,
                        formType
                    ).subscribe(
                        program => {
                            this.rehabProgram = program;
                            this.rehabProgramComponentsService.setProgram(program);
                        }
                    )
                    this.subscription.add(rehabSub$);
                },
                complete: () => {
                    console.info('Dialog closed');
                },
            }
        );
        this.subscription.add(dialogSub$);
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
