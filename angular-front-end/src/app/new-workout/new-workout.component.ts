import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../services/workout.service';
import { Observable } from 'rxjs/Rx';
import { Workout } from '../workout/workout';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {Angular2TokenService} from "angular2-token";

@Component({
  selector: 'app-new-workout',
  templateUrl: './new-workout.component.html',
  styleUrls: ['./new-workout.component.sass'],
  providers: [WorkoutService]
})
export class NewWorkoutComponent implements OnInit {
  workout = new Workout;

  submitted: boolean = false;

  constructor(public authTokenService:Angular2TokenService,
    protected authService:AuthService,
    private router:Router,
    public workoutService: WorkoutService
  ) {}

  ngOnInit() {
  }

  d = new Date();

  createWorkout(workout){
    workout.user_id = this.authTokenService.currentUserData.id
    this.submitted = true;
    this.workoutService.createWorkout(workout)
        .subscribe(
          data => { return true },
          error => {
            console.log("Error saving proposal");
            return Observable.throw(error);
          }
        )
  }

}
