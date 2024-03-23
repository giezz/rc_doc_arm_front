import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {RehabProgramComponentsService} from "../../../services/components/rehab-program-components.service";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-protocol',
    templateUrl: './protocol.component.html',
    styleUrls: ['./protocol.component.css']
})
export class ProtocolComponent implements OnInit, OnDestroy {

    private rehabProgramComponentService: RehabProgramComponentsService = inject(RehabProgramComponentsService);


    protocolForm = new FormGroup({
        result: new FormControl(null),
        recommendations: new FormControl(null),
        scales: new FormArray([])
    })

    ngOnInit(): void {

    }

    ngOnDestroy(): void {

    }

    get scales() {
        return this.protocolForm.get('scales') as FormArray;
    }

    createProtocol() {
        console.log(this.protocolForm.value)
    }

    addScale() {
        this.scales.push(new FormControl("ШРМ 1: Легкие ограничения"))
    }
}
