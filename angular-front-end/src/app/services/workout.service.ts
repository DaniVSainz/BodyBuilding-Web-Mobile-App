import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Workout } from '../workout/workout';

@Injectable()
export class WorkoutService {
  private workoutsUrl = 'http://localhost:3000/workouts';

  constructor(private http:Http){}

  getWorkouts(): Observable<Workout[]> {
    return this.http.get(this.workoutsUrl).map((response: Response) => <Workout[]>response.json()).catch(this.handleError);
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
