import { Component, OnInit } from '@angular/core';
import { ReponseComponent } from '../reponse/reponse.component';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

   reponses = [
     {nomAuteur: 'RealPerson1', txtReponse: 'This really be a bruh moment'},
     {nomAuteur: 'RealPerson2', txtReponse: 'We live in a society'},
     {nomAuteur: 'RealPerson3', txtReponse: 'Bottom text'},
   ];

  constructor() { }

  ngOnInit() {
  }

}
