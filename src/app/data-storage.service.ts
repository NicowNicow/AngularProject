import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { CreationPostViewComponent } from './creation-post-view/creation-post-view.component';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  keyPost = 'P0';
  keyReponse = 'R0';
  catchKeyPost$: Observable<any>;
  private catchKeyPostTemp = new Subject<any>();

  constructor() {
    this.catchKeyPost$ = this.catchKeyPostTemp.asObservable();
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
}

