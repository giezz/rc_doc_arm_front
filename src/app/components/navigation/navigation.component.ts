import {Component, OnInit} from '@angular/core';
import { menuItems} from "../../data/pages";
import {Router} from "@angular/router";
import {NavigationService} from "../../services/navigation.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{
  activeItemIndex = 0;
  isVisible = true;
  protected readonly menuItems = menuItems;

  constructor(
    private router: Router,
    private navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.navigationService.showElement$.subscribe(value => {
      this.isVisible = value;
    });

    this.navigationService.activeIndex$.subscribe(value => {
      this.activeItemIndex = value;
    })
  }

  async goToPage(link: string) {
    await this.router.navigate([link])
  }
}
