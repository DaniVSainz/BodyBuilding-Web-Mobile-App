// import { Component } from '@angular/core';

// /**
//  * Generated class for the ButtonsComponent component.
//  *
//  * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
//  * for more info on Angular Components.
//  */
// @Component({
//   selector: 'buttons',
//   templateUrl: 'buttons.html'
// })
// export class ButtonsComponent {

//   text: string;

//   constructor() {
//     console.log('Hello ButtonsComponent Component');
//     this.text = 'Hello World';
//   }

// }

import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimerServiceProvider } from '../../providers/timer-service/timer-service';

@Component({
    selector: 'buttons',
    template: `
        <div>
            <button [disabled]="play" (click)="playTimer()">Play</button>
            <button [disabled]="!play" (click)="pauseTimer()">Pause</button>
            <button (click)="resetTimer()">Reset</button>
        </div>
    `,
    styles: [`
        div {
            text-align: center;
        }
    `]
})
export class ButtonsComponent implements OnInit, OnDestroy {

     playPauseStopUnsubscribe: any;
     play: boolean;

    constructor(private timerService: TimerServiceProvider) {
    }

    ngOnInit() {
        this.playPauseStopUnsubscribe = this.timerService.playPauseStop$.subscribe((res: any) => this.setPlay(res));
    }

    ngOnDestroy() {
        this.playPauseStopUnsubscribe.unsubscribe();
    }

    private setPlay(res: any) {
        (res.play) ? this.play = true : this.play = false;
    }

    playTimer() {
        this.timerService.playTimer();
    }

    pauseTimer() {
        this.timerService.pauseTimer();
    }

    resetTimer() {
        this.timerService.resetTimer();
    }

}
