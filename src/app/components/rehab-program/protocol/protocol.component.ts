import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {RehabProgramComponentsService} from "../../../services/components/rehab-program-components.service";
import {TuiDialogContext, TuiDialogService} from "@taiga-ui/core";
import {PolymorpheusContent} from "@tinkoff/ng-polymorpheus";
import {Observable, of, Subscription} from "rxjs";
import {RehabProgramService} from "../../../services/rehab-program.service";
import {RehabProgram} from "../../../models/rehab-program";
import {Protocol} from "../../../models/protocol";
import {PatientService} from "../../../services/patient.service";
import {CreateProtocolRequest} from "../../../models/request/create-protocol-request";

@Component({
    selector: 'app-protocol',
    templateUrl: './protocol.component.html',
    styleUrls: ['./protocol.component.css', '../../../app.component.css']
})
export class ProtocolComponent implements OnInit, OnDestroy {

    private patientService: PatientService = inject(PatientService);
    private rehabProgramComponentsService: RehabProgramComponentsService = inject(RehabProgramComponentsService);
    private rehabProgramService: RehabProgramService = inject(RehabProgramService);
    private dialogService = inject(TuiDialogService);

    private subscription: Subscription = new Subscription();

    rehabProgram: RehabProgram;
    protocols$: Observable<Protocol[]>;
    isLoaded: boolean = false;


    ngOnInit(): void {
        this.subscription.add(this.rehabProgramComponentsService.program$.subscribe(
                rehabProgram => {
                    if (rehabProgram != null) {
                        this.rehabProgram = rehabProgram;
                        this.protocols$ = this.rehabProgramService.getProtocols(rehabProgram.id)
                        this.isLoaded = true;
                    } else {
                        this.isLoaded = true
                    }
                }
            )
        );
    }

    ngOnDestroy(): void {
    }

    openProtocolCreationDialog(content: PolymorpheusContent<TuiDialogContext>) {
        this.dialogService.open(content, {size: "auto"}).subscribe()
    }

    getProtocols($event: CreateProtocolRequest) {
        this.subscription.add(this.rehabProgramService.createProtocol(this.rehabProgram.id, $event).subscribe(
            value => {
                this.protocols$ = of(value)
                this.subscription.add(this.patientService.getRehabProgram(this.rehabProgram.patient.patientCode, this.rehabProgram.id).subscribe(
                    value => {
                        this.rehabProgramComponentsService.setProgram(value);
                        this.protocols$ = this.rehabProgramService.getProtocols(this.rehabProgram.id);
                    }
                ))
            }
        ));
    }
}
