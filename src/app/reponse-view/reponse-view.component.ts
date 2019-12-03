import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../chat.service';
import { Observable, Subscription } from 'rxjs';
import { DataStorageService } from '../data-storage.service';

@Component({
  selector: 'app-reponse-view',
  templateUrl: './reponse-view.component.html',
  styleUrls: ['./reponse-view.component.css']
})
export class ReponseViewComponent implements OnInit, OnDestroy {

  keyReponse: string;
  data: Observable<any>;
  sub: Subscription;
  Reponse: {
    nom: string,
    reponse: string
  };

  constructor(private chatService: ChatService, private dataStorage: DataStorageService) {   }

  getKeyReponse(): void {
    this.dataStorage.sendKeyReponse().subscribe( dataStorage => this.keyReponse = this.dataStorage.keyReponse );
 }

 incrementKeyReponse(): void {
  // tslint:disable-next-line: prefer-const
  let stringNumberKeyReponse = this.dataStorage.keyReponse.split('P');
  // tslint:disable-next-line: prefer-const
  let numberKeyReponse = parseInt(stringNumberKeyReponse[1], 10) + 1;
  this.keyReponse = 'R' + numberKeyReponse.toString();
  this.dataStorage.getPostKey(this.keyReponse);
}

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
    // Enregistrement d'une réponse dans le LOCALSTORAGE
    this.getKeyReponse();
    this.incrementKeyReponse();
    // tslint:disable-next-line: prefer-const
    let titre = JSON.parse(localStorage.getItem(this.dataStorage.getKeyPostAffichage()));
    this.Reponse = { nom: titre.nom, reponse: message };
    localStorage.setItem(this.keyReponse.toString(), JSON.stringify(this.Reponse));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  Affiche(valeur: any) {
    console.log(valeur.Titre);
    console.log(valeur.post);
  }

}
