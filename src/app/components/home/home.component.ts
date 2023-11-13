import {Component, Input} from '@angular/core';
import { menuItems} from "../../data/pages";
import {NavigationService} from "../../services/navigation.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private displayService: NavigationService) {
  }

  @Input()
  protected readonly menuItems = menuItems;

  setActiveIndex(index: number) {
    this.displayService.setIndex(index);
  }
}
