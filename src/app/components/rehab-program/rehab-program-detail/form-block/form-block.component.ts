import {Component, Input} from '@angular/core';
import {Form} from "../../../../models/form";

@Component({
  selector: 'app-form-block',
  templateUrl: './form-block.component.html',
  styleUrls: ['./form-block.component.css']
})
export class FormBlockComponent {
  @Input("form")
  form: Form;

  @Input("type")
  formType: string;

}
