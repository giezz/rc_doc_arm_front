import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Название организации'
  accountName: string = 'Иванов Иван Иванович'
  avatarUrl: string = 'https://sun59-2.userapi.com/s/v1/ig2/epMn0ETCPwtF6sGc5NAZk4stywWGnTLwmWTsucugRgsZQL12RyQRx-AfMPVZh3Bgo2LTVNMOB3a41K49Hnwavy84.jpg?size=50x50&quality=95&crop=89,675,456,456&ava=1'

}
