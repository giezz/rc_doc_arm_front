import {Component, EventEmitter, inject, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {FormService} from "../../../services/form.service";
import {Form} from "../../../models/form";
import {TUI_ARROW} from "@taiga-ui/kit";
import {PageableResponse} from "../../../models/pageable-response";
import {Exercise} from "../../../models/exercise";
import {FormControl, FormGroup} from "@angular/forms";
import {TuiTablePagination} from "@taiga-ui/addon-table";

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.css', '../pages.component.css']
})
export class FormsComponent implements OnInit {

    @Input()
    asAddFormDialog = false;

    @Output()
    onButtonPressed = new EventEmitter<number>()
    buttonPressed(formId: number) {
        this.onButtonPressed.emit(formId)
    }

    @Output()
    getFormOnButtonPressed = new EventEmitter<Form>()
    formOnButtonPressed(form: Form) {
        this.getFormOnButtonPressed.emit(form)
    }

    private formsService: FormService = inject(FormService);

    data$: Observable<PageableResponse<Form>> = new Observable<PageableResponse<Form>>();
    pageSizes: number[] = [10, 15, 25, 50, 100];
    page: number = 0;
    size: number = this.pageSizes[0];

    searchForms = new FormGroup({
        formName: new FormControl()
    })

    ngOnInit() {
        this.onSubmit();
    }

    onSubmit() {
        this.page = 0;
        this.data$ = this.getData(this.page, this.size);
    }

    paginationChange(pagination: TuiTablePagination) {
        this.data$ = this.getData(pagination.page, pagination.size);
        this.page = pagination.page;
        this.size = pagination.size
    }

    private getData(page: number, size: number) {
        return this.formsService.getAll(page, size, this.searchForms.value.formName)
    }

}
