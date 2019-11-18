import { Component } from '@angular/core';
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
    this.chatService.login('NicoPC');
  }
}
