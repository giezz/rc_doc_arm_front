import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {FormService} from "../../../services/form.service";
import {Form} from "../../../models/form";
import {TUI_ARROW} from "@taiga-ui/kit";

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.css', '../pages.component.css']
})
export class FormsComponent implements OnInit, OnDestroy {

    private formsService: FormService = inject(FormService);

    readonly arrow = TUI_ARROW;

    forms$: Observable<Form[]>;
    expanded: boolean = false;

    ngOnInit() {
        this.forms$ = this.formsService.getAll();
    }

    ngOnDestroy() {
    }

    searchForms() {

    }

    toggle() {
        this.expanded = !this.expanded;
    }

}
