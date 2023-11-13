import {Component, OnInit} from '@angular/core';
import { menuItems} from "../../data/pages";
import {NavigationEnd, Router} from "@angular/router";
import {NavigationService} from "../../services/navigation.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{
  activeItemIndex: number = 0;
  isVisible: boolean = true;
  protected readonly menuItems = menuItems;

  constructor(private router: Router, private navigationService: NavigationService) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Проверяем, является ли текущий маршрут главной страницей
        this.isVisible = (event.url !== '/');
      }
    });
  }

  ngOnInit(): void {
    this.navigationService.activeIndex$.subscribe(value => {
      this.activeItemIndex = value;
    })
  }

  async goToPage(link: string) {
    await this.router.navigate([link])
  }
}
