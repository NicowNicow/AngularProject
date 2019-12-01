import { Component, OnInit, Input } from '@angular/core';
import { Url } from 'url';
import { MainMenuViewComponent } from '../main-menu-view/main-menu-view.component';
import { DataStorageService } from '../data-storage.service';

@Component({
  selector: 'app-post-redirection',
  templateUrl: './post-redirection.component.html',
  styleUrls: ['./post-redirection.component.css']
})

export class PostRedirectionComponent implements OnInit {

  @Input() nomPostTemp: string;

  constructor(public dataService: DataStorageService) { }

  ngOnInit() {
  }

  getKeyPost(): void {
    this.dataService.findPostFromTitle(this.nomPostTemp);
  }
}
