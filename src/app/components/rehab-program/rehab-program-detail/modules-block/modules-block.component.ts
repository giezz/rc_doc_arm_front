import {Component, Input} from '@angular/core';
import {Module} from "../../../../models/module";

@Component({
  selector: 'app-modules-block',
  templateUrl: './modules-block.component.html',
  styleUrls: ['./modules-block.component.css']
})
export class ModulesBlockComponent {

  @Input("module")
  module: Module;

  @Input("index")
  index: number;

}
