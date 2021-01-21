import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css'],
})
export class RadioComponent implements OnInit {
  constructor(private httpService: HttpService) {}
  cities: any;
  ngOnInit(): void {
    this.cities = this.httpService.cities;
  }
  @Input() radiosInCityObject;

  // audioSource: any;
  // radioSound: any;
  // audio: any;
  // playAudio(src) {
  //   if (this.radioSound) {
  //     this.radioSound.pause();
  //   }
  //   this.audio = new Audio();
  //   this.audio.src = src;
  //   this.audio.load();
  //   this.audio.play();
  //   this.radioSound = this.audio;
  // }
  // play(url) {
  //   this.playAudio(url);
  // }
  // pause() {
  //   this.audio.pause();
  // }
  // buttonState: any;
}
