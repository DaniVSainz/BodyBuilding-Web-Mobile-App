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
    return this.http.post('workout',workOut, {headers: headers})
      .map(res => res.json());
  }

  // registerUser(user) {
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.post('users/register', user, {headers: headers})
  //     .map(res => res.json());
  // }

}
