import { Component, OnInit, OnDestroy} from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { TimerService } from '../services/timer.service';
import {WorkoutService} from  '../services/workout.service';
import {Exercise} from '../workout/show-workout/exercise';
import { ActivatedRoute, Params } from '@angular/router';

// @Component({
//   selector: 'app-timer',
//   templateUrl: './timer.component.html',
//   styleUrls: ['./timer.component.sass']
// })
@Component({
    selector: 'timer',
    template: `
        <h1>
          {{(minutesDisplay) && (minutesDisplay <= 59) ? minutesDisplay : '00'}} : {{(secondsDisplay) && (secondsDisplay <= 59) ? secondsDisplay : '00'}} <br/>
        </h1>
        <p *ngIf='exercise'>Rest Time:{{exercise.rest}} seconds</p>
        <buttons></buttons>
    `,
    styles: [ `
        h1 {
            color: #57acec;
            margin-top: 24px;
            text-align: center;
        }
        p {
          text-align: center;
        }
    `],
    providers: [WorkoutService]
})

export class TimerComponent implements OnInit, OnDestroy {
    private playPauseStopUnsubscribe: any;
    exercise: Exercise;

    start = 0;
    ticks = 0;

    minutesDisplay: number = 0;
    hoursDisplay: number = 0;
    secondsDisplay: number = 0;

    sub: Subscription;

    constructor(private timerService: TimerService,
                private route: ActivatedRoute,
                public workoutService: WorkoutService,
              ) {}

    ngOnInit() {
      this.playPauseStopUnsubscribe = this.timerService.playPauseStop$.subscribe((res: any) => this.playPauseStop(res));

      let workoutRequest = this.route.params.flatMap((params: Params)=> this.workoutService.getShowExercise(+params['id']));
      workoutRequest.subscribe(response => this.exercise = response.json());
    }

    ngOnDestroy() {
        this.playPauseStopUnsubscribe.unsubscribe();;
    }

    private playPauseStop(res: any) {
        if(res.play) {
            this.startTimer();
        } else if(res.pause) {
            this.pauseTimer();
        } else if (res.stop) {
            this.stopTimer();
        }
    }

    private startTimer() {

        let timer = Observable.timer(1, 1000);
        this.sub = timer.subscribe(
            t => {
                this.ticks = this.start + t;

                this.secondsDisplay = this.getSeconds(this.ticks);
                this.minutesDisplay = this.getMinutes(this.ticks);
                this.hoursDisplay = this.getHours(this.ticks);
                if (this.ticks == this.exercise.rest){
                    var audio = new Audio('/assets/ding.mp3');
                    audio.play();
                }
            }
        );
    }

    private pauseTimer() {
        this.start = ++this.ticks;
        if (this.sub) this.sub.unsubscribe();
    }

    private stopTimer() {
        this.start = 0;
        this.ticks = 0;

        this.minutesDisplay = 0;
        this.hoursDisplay = 0;
        this.secondsDisplay = 0;
        if (this.sub) this.sub.unsubscribe();
    }

    private getSeconds(ticks: number) {
        return this.pad(ticks % 60);
    }

    private getMinutes(ticks: number) {
         return this.pad((Math.floor(ticks / 60)) % 60);
    }

    private getHours(ticks: number) {
        return this.pad(Math.floor((ticks / 60) / 60));
    }

    private pad(digit: any) {
        return digit <= 9 ? '0' + digit : digit;
    }
}
