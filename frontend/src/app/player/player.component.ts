import { Component } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  audio: HTMLAudioElement = new Audio();
  constructor() { 
    this.audio.src = "s3://music-bucket-2122/[iSongs.info] 04 - Raakhee Raakhee.mp3";
  }
}
