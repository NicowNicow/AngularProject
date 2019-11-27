import { Component } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projet-angular';

  constructor(private chatService: ChatService) {
    this.chatService.initSocket();
  }

  loginbutton() {
    alert('You are connected as NicoPC');
    this.chatService.login('NicoPC');
  }
}
