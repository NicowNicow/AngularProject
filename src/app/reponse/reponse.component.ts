import { Component, OnInit, Input } from '@angular/core';
import { PostViewComponent } from '../post-view/post-view.component';
import { DataStorageService } from '../data-storage.service';

@Component({
  selector: 'app-reponse',
  templateUrl: './reponse.component.html',
  styleUrls: ['./reponse.component.css']
})
export class ReponseComponent implements OnInit {

  @Input() txtReponse: string;

  constructor(private dataStorage: DataStorageService) { }

  ngOnInit() {
  }

}
