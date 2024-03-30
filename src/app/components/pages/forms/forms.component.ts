import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {FormService} from "../../../services/form.service";
import {Form} from "../../../models/form";

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit, OnDestroy {

    private formsService: FormService = inject(FormService);

    forms$: Observable<Form[]>;

    ngOnInit() {
        this.forms$ = this.formsService.getAll();
    }

    ngOnDestroy() {
    }

    searchForms() {

    }

}
