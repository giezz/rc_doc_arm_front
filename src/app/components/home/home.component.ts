import {Component, Input} from '@angular/core';
import { menuItems} from "../../data/pages";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @Input()
  protected readonly menuItems = menuItems;

}
