import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Workout } from '../workout';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";


@Component({
  selector: 'app-new-workout',
  templateUrl: './new-workout.component.html',
  styleUrls: ['./new-workout.component.sass'],
})
export class NewWorkoutComponent implements OnInit {
  workout = new Workout;
  workoutId: any;
  errorMessage: string;
  link: any;
  submitted: boolean = false;

  constructor(
    // public authTokenService:Angular2TokenService,
    protected authService:AuthService,
    private router:Router,
    // public workoutService: WorkoutService
  ) {}

  ngOnInit() {
  }


}
