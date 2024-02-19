import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit, OnDestroy {
  ngOnInit() {
    console.log('PagesComponent');
  }

  ngOnDestroy() {
    console.log('PagesComponent destroyed');
  }
}
