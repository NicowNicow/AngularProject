import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ChatService } from '../chat.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit, OnDestroy {

  @Input() Content: string;
  data: Observable<any>;
  sub: Subscription;

  constructor(private chatService: ChatService) {   }

  ngOnInit() {
    this.data = this.chatService.onMessage();
    this.sub = this.data.subscribe({
      next: value => this.test(value),
      error: err => console.error(err),
      complete: () => console.log('DONE')
    });
  }

  OnButtonPress(message: string) {
    this.chatService.SendMessage(message);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  test(valeur: any) {
    console.log(valeur.pseudo);
    console.log(valeur.message);
  }

}
