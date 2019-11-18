import { Component, OnInit, Input } from '@angular/core';
import { PostViewComponent } from '../post-view/post-view.component';

@Component({
  selector: 'app-reponse',
  templateUrl: './reponse.component.html',
  styleUrls: ['./reponse.component.css']
})
export class ReponseComponent implements OnInit {

  @Input() nomAuteur: string;
  @Input() txtReponse: string;

  constructor() { }

  ngOnInit() {
  }

}
