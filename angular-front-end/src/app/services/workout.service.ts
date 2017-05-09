import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {Angular2TokenService} from "angular2-token";

import { Workout } from '../workout/workout';
import { Exercise } from '../workout/show-workout/exercise';

@Injectable()
export class WorkoutService {
  private workoutsUrl = 'http://localhost:3000/workouts';
  private exerciseUrl = 'http://localhost:3000/exercises/';

  // private exerciseUrl = 'https://lift-tracker--api.herokuapp.com/exercises'
  // private workoutsUrl = 'https://lift-tracker--api.herokuapp.com/workouts';

  constructor(private http:Http,
    public authTokenService:Angular2TokenService,
    protected authService:AuthService,
    private router:Router

  ){}


// =================
//     WORKOUTS    |
// =================

  getWorkouts(): Observable<Workout[]> {
    return this.http.get(this.workoutsUrl+'/user/'+this.authTokenService.currentUserData.id).map((response: Response) => <Workout[]>response.json()).catch(this.handleError);

  }

  getShowWorkouts(id: number){
    return this.http.get(this.workoutsUrl + "/" + id);
  }



  createWorkout(workout) {
  let headers = new Headers({'Content-Type': 'application/json' });
  let options = new RequestOptions({headers: headers});
  return this.http.post(this.workoutsUrl, JSON.stringify(workout), {
    headers: headers}).map((res: Response)=> res.json());
  }

// =================
//   END  WORKOUTS    |
// =================

// =================
//   EXERCISE      |
// =================
  createExercise(exercise) {
  let headers = new Headers({'Content-Type': 'application/json' });
  let options = new RequestOptions({headers: headers});
  return this.http.post(this.exerciseUrl, JSON.stringify(exercise), {
    headers: headers}).map((res: Response)=> res.json());
  }




  private handleError (error: Response | any) {
  // In a real world app, we might use a remote logging infrastructure
  let errMsg: string;
  if (error instanceof Response) {
    const body = error.json() || '';
    const err = body.error || JSON.stringify(body);
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } else {
    errMsg = error.message ? error.message : error.toString();
  }
  console.error(errMsg);
  return Observable.throw(errMsg);
  }
}
