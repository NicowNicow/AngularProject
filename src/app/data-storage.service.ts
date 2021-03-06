import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { CreationPostViewComponent } from './creation-post-view/creation-post-view.component';
import { MainMenuViewComponent } from './main-menu-view/main-menu-view.component';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  keyPost = 'P0';
  keyReponse = 'R0';

  private keyPostAffichage: string;
  private keyReponseAffichage: string[];

  catchKeyPost: Observable<any>;
  catchKeyReponse: Observable<any>;

  private catchKeyPostTemp = new Subject<any>();
  private catchKeyReponseTemp = new Subject<any>();

  constructor() {
    this.catchKeyPost = this.catchKeyPostTemp.asObservable();
    this.catchKeyReponse = this.catchKeyReponseTemp.asObservable();
  }

  sendKeyPost(): Observable<string> {
    return of(this.keyPost);
  }

  sendKeyReponse(): Observable<string> {
    return of(this.keyReponse);
  }

  getPostKey(data: any) {
    this.catchKeyPostTemp.next(data);
    this.keyPost = data;
  }

  getPostReponse(data: any) {
    this.catchKeyReponseTemp.next(data);
    this.keyReponse = data;
  }

  findPostFromTitle(titrePost: string) {
    this.keyPostAffichage = '';
    for (let index = 0; index < localStorage.length; index++) {
      // tslint:disable-next-line: prefer-const
      let key = localStorage.key(index);
      // tslint:disable-next-line: prefer-const
      let value = JSON.parse(localStorage.getItem(key));
      if ((titrePost.localeCompare(value.nom) === 0) && ('P'.localeCompare(key.charAt(0))  === 0)) {
        this.keyPostAffichage = key;
        break;
      }
    }
  }

  getPostTitre(key: string): string {
    // tslint:disable-next-line: prefer-const
    let post = JSON.parse(localStorage.getItem(key));
    return(post.nom);
  }

  getPostTexte(key: string): string {
    // tslint:disable-next-line: prefer-const
    let post = JSON.parse(localStorage.getItem(key));
    return(post.post);
  }

  getKeyPostAffichage() {
    return this.keyPostAffichage;
  }

  getKeyReponseAffichage() {
    return this.keyReponseAffichage;
  }

  findReponsesFromPostTitle(titrePost: string) {
    this.keyReponseAffichage = [];
    for (let index = 0; index < localStorage.length; index++) {
      // tslint:disable-next-line: prefer-const
      let key = localStorage.key(index);
      // tslint:disable-next-line: prefer-const
      let value = JSON.parse(localStorage.getItem(key));
      if ((titrePost.localeCompare(value.nom) === 0) && ('R'.localeCompare(key.charAt(0))  === 0)) {
        this.keyReponseAffichage.push(key);
      }
    }
  }
}

