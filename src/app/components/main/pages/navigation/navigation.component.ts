import {Component} from '@angular/core';
import {menuItems} from "../../../../data/pages";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  activeItemIndex: number = 0;
  isVisible: boolean = true;
  protected readonly menuItems = menuItems;

  // constructor(private router: Router) {
  //   router.events.subscribe(event => {
  //     if (event instanceof NavigationEnd) {
  //       // Проверяем, является ли текущий маршрут главной страницей
  //       this.isVisible = (event.url !== '/');
  //     }
  //   });
  // }
}
