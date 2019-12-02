import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../data-storage.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  titre: string;
  post: string;

  constructor(public dataService: DataStorageService) { }

  ngOnInit() {
    this.titre = this.dataService.getPostTitre(this.dataService.getKeyPostAffichage());
    this.post = this.dataService.getPostTexte(this.dataService.getKeyPostAffichage());
  }

}
