import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostRedirectionComponent } from './post-redirection/post-redirection.component';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { NewPostComponent } from './new-post/new-post.component';
import { ReponseComponent } from './reponse/reponse.component';
import { EcrireReponseComponent } from './ecrire-reponse/ecrire-reponse.component';
import { MainMenuViewComponent } from './main-menu-view/main-menu-view.component';
import { CreationPostViewComponent } from './creation-post-view/creation-post-view.component';
import { PostViewComponent } from './post-view/post-view.component';
import { ReponseViewComponent } from './reponse-view/reponse-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostRedirectionComponent,
    ListPostsComponent,
    NewPostComponent,
    ReponseComponent,
    EcrireReponseComponent,
    MainMenuViewComponent,
    CreationPostViewComponent,
    PostViewComponent,
    ReponseViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
