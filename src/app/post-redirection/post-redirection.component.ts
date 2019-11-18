import { Component, OnInit, Input } from '@angular/core';
import { Url } from 'url';
import { ListPostsComponent } from '../list-posts/list-posts.component';

@Component({
  selector: 'app-post-redirection',
  templateUrl: './post-redirection.component.html',
  styleUrls: ['./post-redirection.component.css']
})

export class PostRedirectionComponent implements OnInit {

  @Input() nomPost: string;
  @Input() nomAuteur: string;
  @Input() nbrReponses: string;


  constructor() { }

  ngOnInit() {
  }

}
