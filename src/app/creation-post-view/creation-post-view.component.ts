import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../chat.service';
import { Observable, Subscription } from 'rxjs';
import { DataStorageService } from '../data-storage.service';


@Component({
  selector: 'app-creation-post-view',
  templateUrl: './creation-post-view.component.html',
  styleUrls: ['./creation-post-view.component.css'],
})

export class CreationPostViewComponent implements OnInit, OnDestroy {

  keyPost: string;
  keyReponse: string;
  data: Observable<any>;
  sub: Subscription;
  Post: {
    nom: string,
    post: string
  };

  constructor(private chatService: ChatService, private dataStorage: DataStorageService) {}

  ngOnInit() {
    this.data = this.chatService.onMessage();
    this.sub = this.data.subscribe({
      next: value => this.Affiche(value),
      error: err => console.error(err),
      complete: () => console.log('DONE')
    });
  }

  getKeyPost(): void {
    this.dataStorage.sendKeyPost().subscribe( dataStorage => this.keyPost = this.dataStorage.keyPost );
 }

 incrementKeyPost(): void {
  // tslint:disable-next-line: prefer-const
  let stringNumberKeyPost = this.dataStorage.keyPost.split('P');
  // tslint:disable-next-line: prefer-const
  let numberKeyPost = parseInt(stringNumberKeyPost[1], 10) + 1;
  this.keyPost = 'P' + numberKeyPost.toString();
  this.dataStorage.getPostKey(this.keyPost);
}

  OnButtonPress(titre: string, message: string) {
    this.chatService.SendMessage(titre, message);
    // Enregistrement dans le LOCALSTORAGE pour un post
    this.getKeyPost();
    this.incrementKeyPost();
    this.Post = { nom: titre, post: message };
    localStorage.setItem(this.keyPost.toString(), JSON.stringify(this.Post));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  Affiche(valeur: any) {
    console.log(valeur.Titre);
    console.log(valeur.post);
  }

}
