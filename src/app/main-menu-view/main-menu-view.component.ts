import { Component, OnInit } from '@angular/core';
import { PostRedirectionComponent } from '../post-redirection/post-redirection.component';

@Component({
  selector: 'app-main-menu-view',
  templateUrl: './main-menu-view.component.html',
  styleUrls: ['./main-menu-view.component.css']
})

export class MainMenuViewComponent implements OnInit {
  posts = [];

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < localStorage.length; i++) {
        // tslint:disable-next-line: prefer-const
        let key = localStorage.key(i);
        // tslint:disable-next-line: prefer-const
        let value = JSON.parse(localStorage.getItem(key));
        this.posts.push({nomPost: value.nom, nomAuteur: 'RealPerson1'});
}
  }

}
