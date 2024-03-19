import {Component, Input} from '@angular/core';
import {ModuleForm} from "../../../../models/module-form";

@Component({
  selector: 'app-result-detail-single',
  templateUrl: './result-detail-single.component.html',
  styleUrls: ['./result-detail-single.component.css']
})
export class ResultDetailSingleComponent {

    @Input()
    moduleForm: ModuleForm;
}
