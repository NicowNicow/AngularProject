import { Component, OnInit } from '@angular/core';
import { PostRedirectionComponent } from '../post-redirection/post-redirection.component';

@Component({
  selector: 'app-main-menu-view',
  templateUrl: './main-menu-view.component.html',
  styleUrls: ['./main-menu-view.component.css']
})
export class MainMenuViewComponent implements OnInit {

  posts = [
    {nomPost: 'ValeurTest1', nomAuteur: 'RealPerson1', nbrReponses: '10'},
    {nomPost: 'ValeurTest2', nomAuteur: 'RealPerson2', nbrReponses: '2'},
    {nomPost: 'ValeurTest3', nomAuteur: 'RealPerson3', nbrReponses: '7'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
