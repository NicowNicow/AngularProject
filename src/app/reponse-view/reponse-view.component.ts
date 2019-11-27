import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../chat.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-reponse-view',
  templateUrl: './reponse-view.component.html',
  styleUrls: ['./reponse-view.component.css']
})
export class ReponseViewComponent implements OnInit, OnDestroy {

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

  OnButtonPress( message: string) {
    this.chatService.SendMessage('Reponse', message);
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  Affiche(valeur: any) {
    console.log(valeur.Titre);
    console.log(valeur.post);
  }

}
