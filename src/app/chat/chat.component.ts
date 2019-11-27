import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../chat.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit, OnDestroy {

  data: Observable<any>;
  sub: Subscription;

  constructor(private chatService: ChatService) {   }

  ngOnInit() {
    this.data = this.chatService.onMessage();
    this.sub = this.data.subscribe({
      next: value => this.Affiche(value),
      error: err => console.error(err),
      complete: () => console.log('DONE')
    });
  }

  OnButtonPress(titre: string, message: string) {
    this.chatService.SendMessage(titre, message);
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  Affiche(valeur: any) {
    console.log(valeur.Titre);
    console.log(valeur.post);
  }

}
