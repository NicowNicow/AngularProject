import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { StorageServiceModule} from 'angular-webstorage-service';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostRedirectionComponent } from './post-redirection/post-redirection.component';
import { ReponseComponent } from './reponse/reponse.component';
import { ChatService } from './chat.service';
import { MainMenuViewComponent } from './main-menu-view/main-menu-view.component';
import { CreationPostViewComponent } from './creation-post-view/creation-post-view.component';
import { PostViewComponent } from './post-view/post-view.component';
import { ReponseViewComponent } from './reponse-view/reponse-view.component';
import { ChatComponent } from './chat/chat.component';

const appRoutes: Routes = [
  { path: 'creationPost', component: CreationPostViewComponent },
  { path: 'postView', component: PostViewComponent },
  { path: 'reponseView', component: ReponseViewComponent },
  { path: '', component: MainMenuViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ChatComponent,
    PostRedirectionComponent,
    ReponseComponent,
    MainMenuViewComponent,
    CreationPostViewComponent,
    PostViewComponent,
    ReponseViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
