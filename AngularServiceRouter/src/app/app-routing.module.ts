import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimelinesComponent } from './timelines/timelines.component';
import { YoutubePlaylistComponent } from './youtube-playlist/youtube-playlist.component';
import {YoutubePlayerComponent} from './youtube-player/youtube-player.component';

const routes: Routes = [
  {
    path: 'timelines',
    component: TimelinesComponent

  },
  {
  path: 'youtube',
  component: YoutubePlaylistComponent,
  children: [{
  path: ':id',
  component: YoutubePlayerComponent
}]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
