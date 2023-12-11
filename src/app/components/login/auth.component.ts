import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../auth/auth.service";
import {AuthRequest} from "../auth/auth-request";
import {TokenStorageService} from "../../services/token-storage.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  logo_im = 'https://angular.io/assets/images/logos/angular/angular.png'

  constructor(
    private router: Router,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
  ) {
  }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['home']).then()
    }
  }

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  submit() {
    this.authService.login(
      new AuthRequest(
        this.loginForm.value.username!,
        this.loginForm.value.password!
      )
    ).subscribe(
      data => {
        this.tokenStorage.setToken(data.token)
        if (this.authService.isAuthenticated()) {
          this.router.navigate(['home']).then()
        }
      }
    )
  }
}
