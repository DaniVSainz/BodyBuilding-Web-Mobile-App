import { Injectable,EventEmitter } from '@angular/core';

@Injectable()
export class TimerService {

  constructor() { }

  private play: boolean = false;
  private pause: boolean = false;
  private stop: boolean = true;
  public playPauseStop$ = new EventEmitter();

  public playTimer() {
      this.play = true;
      this.pause = false;
      this.stop = false;

      this.playPauseStop$.emit({
          play: this.play
      });
    var audio = new Audio('/assets/clock-start.mp3');
    audio.play();
  }

  public pauseTimer() {
      this.play = false;
      this.pause = true;
      this.stop = false;

      this.playPauseStop$.emit({
          pause: this.pause
      });
  }

  public resetTimer() {
      this.play = false;
      this.pause = false;
      this.stop = true;

      this.playPauseStop$.emit({
          stop: this.stop
      });
  }

}

