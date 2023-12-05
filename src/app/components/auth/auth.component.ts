import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  logo_im = 'https://angular.io/assets/images/logos/angular/angular.png'

  readonly testForm = new FormGroup({
    Login: new FormControl('Логин'),
  });
  constructor() { }

  ngOnInit(): void {
  }
}
