import { Component, OnInit } from '@angular/core';
import { ReponseComponent } from '../reponse/reponse.component';
import { DataStorageService } from '../data-storage.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  private reponses = [];
  private reponsesKey = [];

  constructor(private dataStorage: DataStorageService) { }

  ngOnInit() {
    this.dataStorage.findReponsesFromPostTitle(this.dataStorage.getPostTitre(this.dataStorage.getKeyPostAffichage()));
    this.reponsesKey = this.dataStorage.getKeyReponseAffichage();
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < localStorage.length; index++) {
      // tslint:disable-next-line: prefer-for-of
      for (let index2 = 0; index2 < this.reponsesKey.length; index2++) {
        if (this.reponsesKey[index2].localeCompare(localStorage.key(index)) === 0) {
          this.reponses.push({txt: JSON.parse(localStorage.getItem(this.reponsesKey[index2])).reponse});
        }
      }
    }
  }

}
