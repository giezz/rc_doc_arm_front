import {Component, inject, OnInit} from '@angular/core';
import {AuthService} from "../../../auth/auth.service";
import {Router} from "@angular/router";
import {DoctorService} from "../../../services/doctor.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private doctorService: DoctorService = inject(DoctorService)
  private authService: AuthService = inject(AuthService)
  private router: Router = inject(Router)

  title = 'Название организации'
  accountName: string

  ngOnInit(): void {
    this.accountName = this.doctorService.getDoctorFullName()
  }

  logout() {
    this.authService.logout()
    this.router.navigate(['/login']).then()
  }
}
