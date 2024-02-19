import {Component, inject} from '@angular/core';
import {TokenStorageService} from "./services/token-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  tokenService: TokenStorageService = inject(TokenStorageService);

  isLogged() : boolean {
    return !!this.tokenService.getToken();
  }
}
