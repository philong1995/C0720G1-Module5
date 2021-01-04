import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelinesComponent } from './timelines/timelines.component';
import {YoutubePlayerComponent} from './youtube-player/youtube-player.component';
import {YoutubePlaylistComponent} from './youtube-playlist/youtube-playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelinesComponent,
    YoutubePlayerComponent,
    YoutubePlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
