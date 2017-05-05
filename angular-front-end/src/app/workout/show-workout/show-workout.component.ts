import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http'

import { Workout } from '../workout';
import { WorkoutService } from '../../services/workout.service';

@Component({
  selector: 'app-show-workout',
  templateUrl: './show-workout.component.html',
  styleUrls: ['./show-workout.component.sass'],
  providers: [WorkoutService]
})
export class ShowWorkoutComponent implements OnInit {

  errorMessage: string;

  constructor(
    private http: Http,
    public workoutService: WorkoutService,
    private route: ActivatedRoute
  ){}

 @Input()
  workout: Workout;

  // ngOnInit(){
  //   this.getShowWorkouts();
  // }

  // getShowWorkouts(){
  //   this.workoutService.getShowWorkouts().subscribe(workout=> this.workout= workout,error=> this.errorMessage = <any>error );
  // }

    ngOnInit(): void{
    let workoutRequest = this.route.params
        .flatMap((params: Params)=> this.workoutService.getShowWorkouts(+params['id']));
    workoutRequest.subscribe(response => this.workout = response.json());
  }

}

