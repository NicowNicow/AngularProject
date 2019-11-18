import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostRedirectionComponent } from './post-redirection/post-redirection.component';
import { NewPostComponent } from './new-post/new-post.component';
import { ReponseComponent } from './reponse/reponse.component';
import { EcrireReponseComponent } from './ecrire-reponse/ecrire-reponse.component';
import { ChatService } from './chat.service';
import { MainMenuViewComponent } from './main-menu-view/main-menu-view.component';
import { CreationPostViewComponent } from './creation-post-view/creation-post-view.component';
import { PostViewComponent } from './post-view/post-view.component';
import { ReponseViewComponent } from './reponse-view/reponse-view.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ChatComponent,
    PostRedirectionComponent,
    NewPostComponent,
    ReponseComponent,
    EcrireReponseComponent,
    MainMenuViewComponent,
    CreationPostViewComponent,
    PostViewComponent,
    ReponseViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
