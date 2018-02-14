import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import {Router} from "@angular/router";
import {Angular2TokenService} from "angular2-token";
import 'rxjs/add/operator/map';
import {AuthService} from '../auth-service/auth-service';

import { Workout } from '../../interfaces/workout';
import {WorkoutTemplate} from '../../interfaces/workoutTemplate'
// import { Exercise } from '../workout/show-workout/exercise';
// import {Exercise_set} from '../workout/exercise-show/exercise_set';

@Injectable()
export class WorkoutService {
  private workoutsUrl = 'http://localhost:3000/workouts/';
  private exerciseUrl = 'http://localhost:3000/exercises/';
  private exerciseSetUrl = 'http://localhost:3000/exercise_sets/';
  private exerciseSetsUrl = 'http://localhost:3000/exercisesets/';
  private templateUrl = 'http://localhost:3000/workout_templates';
  private exerciseTemplateUrl = 'http://localhost:3000/exercise_templates/';

  // private workoutsUrl = 'https://lift-tracker--api.herokuapp.com/workouts';
  // private exerciseUrl = 'https://lift-tracker--api.herokuapp.com/exercises/'
  // private exerciseSetUrl = 'https://lift-tracker--api.herokuapp.com/exercise_sets/';
  // private exerciseSetsUrl = 'https://lift-tracker--api.herokuapp.com/exercisesets/';
  // private templateUrl = 'https://lift-tracker--api.herokuapp.com/workout_templates';
  // private exerciseTemplateUrl = 'https://lift-tracker--api.herokuapp.com/exercise_templates/';

  authToken: any;
  user: any;
  
  constructor(private http:Http,
    public authTokenService:Angular2TokenService,
    protected authService:AuthService,
  ){}


// =================
//     WORKOUTS    |
// =================

loadToken() {
  const token = localStorage.getItem('id_token');
  this.authToken = token;
}

postWorkout(workOut:Object) {
  let headers = new Headers();
  // body = 
  this.loadToken();
  headers.append('Authorization', this.authToken);
  headers.append('Content-Type', 'application/json');
  return this.http.post('api/workout/',workOut, {headers: headers})
    // .map(res => res);
}

getWorkouts() {
  let headers = new Headers();
  // body = 
  this.loadToken();
  headers.append('Authorization', this.authToken);
  headers.append('Content-Type', 'application/json');
  return this.http.get('api/workout/', {headers: headers})
    .map(res => res.json());
}

getWorkout(id:string) {
  let headers = new Headers();
  this.loadToken();
  headers.append('Authorization', this.authToken);
  headers.append('Content-Type', 'application/json');
  return this.http.get('api/workout/'+ id , {headers: headers})
    .map(res => res.json());
}

//EXERCISE SECTION BEWLOW
//EXERCISE SECTION BEWLOW
//EXERCISE SECTION BEWLOW
postExercise(exercise:Object) {
  let headers = new Headers();
  this.loadToken();
  headers.append('Authorization', this.authToken);
  headers.append('Content-Type', 'application/json');
  return this.http.post('api/exercise/',exercise, {headers: headers}).map(res => res.json());
}

getExercise(id:string) {
  let headers = new Headers();
  this.loadToken();
  headers.append('Authorization', this.authToken);
  headers.append('Content-Type', 'application/json');
  return this.http.get('api/exercise/'+ id , {headers: headers})
    .map(res => res.json());
}

//SETS
//SETS
//SETS
postSet(set:Object) {
  let headers = new Headers();
  this.loadToken();
  headers.append('Authorization', this.authToken);
  headers.append('Content-Type', 'application/json');
  return this.http.post('api/set/',set, {headers: headers}).map(res => res.json());
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


// =================
//   TEMPLATES      |
// =================

   getTemplates(): Observable<WorkoutTemplate[]> {
    return this.http.get(this.templateUrl+'/user/'+this.authTokenService.currentUserData.id).map((response: Response) => <WorkoutTemplate[]>response.json()).catch(this.handleError);
  }

  getTemplate(id: number){
    return this.http.get(this.templateUrl + "/" + id);
  }

  createTemplate(template) {
    let headers = new Headers({'Content-Type': 'application/json' });
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.templateUrl, JSON.stringify(template), {
      headers: headers}).map((res: Response)=> res.json());
  }

  createExerciseTemplate(template) {
    let headers = new Headers({'Content-Type': 'application/json' });
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.exerciseTemplateUrl, JSON.stringify(template), {
      headers: headers}).map((res: Response)=> res.json());
  }




// =================
//   DELETE        |
// =================

  deleteWorkout(workout){
    return this.http.delete(this.workoutsUrl + workout.id)
    .map((response: Response) => response.json());
  }

  deleteExercise(exercise){
    return this.http.delete(this.exerciseUrl + exercise.id)
    .map((response: Response) => response.json());
  }

}