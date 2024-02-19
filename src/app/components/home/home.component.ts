import {Component, OnDestroy, OnInit} from '@angular/core';
import {menuItems} from "../../data/pages";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy {

  protected readonly menuItems = menuItems;

  ngOnInit() {
    console.log('HomeComponent');
  }

  ngOnDestroy() {
    console.log('HomeComponent destroyed');
  }
}
