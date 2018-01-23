import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class WorkoutService {
  authToken: any;
  user: any;

  constructor(
    private http: Http,
    private authService: AuthService
  ) { }

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

}
