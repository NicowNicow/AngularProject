import { Injectable } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { Observable } from 'rxjs';
import { Message } from './chat/Message';

@Injectable({
  providedIn: 'root'
})

export class ChatService {

  socket: any;

  loggin = false;

  pseudo = '';

  serviceUrl = 'DESKTOP-BRC6SOT:3000';

  Obj: Observable<Message>;



  constructor() {

  }

  initSocket() {
    this.socket = socketIo( this.serviceUrl );
  }


  login(pseudo: string) {

    this.socket.emit('newUser', pseudo);

    this.loggin = true;

    this.pseudo = pseudo;

  }

  SendMessage(message: string) {
    this.socket.emit('message', message);
  }

// filtrer les spam message avec dinstinct (check rxjs doc)

public onMessage(): Observable<Message> { // fonction onMessage de return Observable
  return new Observable<Message>(observer => {
    this.socket.on('message', (data: Message) => { // sur event 'message' effectue la fonction () qui prend data de type any en entrée
      return observer.next(data);
    });
  });
}

public MessageRecu(): Observable<Message> {
  return this.Obj;
}

}
