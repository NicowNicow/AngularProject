import { Injectable } from '@angular/core';
import * as socketIo from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})

export class ChatService {

  socket: any;

  loggin = false;

  pseudo = '';

  serviceUrl = 'DESKTOP-BRC6SOT:3000';

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

}
