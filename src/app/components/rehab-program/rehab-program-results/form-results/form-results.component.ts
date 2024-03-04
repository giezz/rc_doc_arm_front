import {Component, Input, OnInit} from '@angular/core';
import {FormResult} from "../../../../models/form-result";
import {TuiDay} from "@taiga-ui/cdk";

@Component({
  selector: 'app-form-results',
  templateUrl: './form-results.component.html',
  styleUrls: ['./form-results.component.css']
})
export class FormResultsComponent implements OnInit {

  @Input()
  formResults: FormResult[];
  value: [TuiDay, number];

  ngOnInit(): void {

  }
}
