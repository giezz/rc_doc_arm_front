import { Component } from '@angular/core';
import {menuItems} from "../../../data/pages";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  activeItemIndex: number = 0;
  protected readonly menuItems = menuItems;
}
