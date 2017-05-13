import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimerService } from '../services/timer.service';

@Component({
    selector: 'buttons',
    template: `
        <div>
            <button [disabled]="play" (click)="playTimer()">Play</button>
            <button [disabled]="!play" (click)="pauseTimer()">Pause</button>
            <button (click)="stopTimer()">Stop</button>
        </div>
    `,
    styles: [`
        div {
            text-align: center;
        }
    `]
})
export class ButtonsComponent implements OnInit, OnDestroy {

    private playPauseStopUnsubscribe: any;
    private play: boolean;

    constructor(private timerService: TimerService) {
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

    stopTimer() {
        this.timerService.stopTimer();
    }

}
