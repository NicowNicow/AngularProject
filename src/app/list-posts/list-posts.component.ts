import { Component, OnInit } from '@angular/core';
import { PostRedirectionComponent } from '../post-redirection/post-redirection.component';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {

  posts = [
    {nomPost: 'ValeurTest1', nomAuteur: 'RealPerson1', nbrReponses: '10'},
    {nomPost: 'ValeurTest2', nomAuteur: 'RealPerson2', nbrReponses: '2'},
    {nomPost: 'ValeurTest3', nomAuteur: 'RealPerson3', nbrReponses: '7'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
