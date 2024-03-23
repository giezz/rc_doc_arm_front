import {Component, Input} from '@angular/core';
import {Form} from "../../../models/form";

@Component({
    selector: 'app-form-card',
    templateUrl: './form-card.component.html',
    styleUrls: ['./form-card.component.css']
})
export class FormCardComponent {

    @Input()
    form: Form;
}
