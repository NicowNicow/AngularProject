import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {

  @Input() Content: string;


  constructor(private chatService: ChatService) {   }

  ngOnInit() {
  }

  OnButtonPress(message: string) {
    this.chatService.SendMessage(message);
  }
}
