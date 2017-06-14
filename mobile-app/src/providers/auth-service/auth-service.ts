import { Injectable } from '@angular/core';
import {Angular2TokenService} from "angular2-token";
import {Subject, Observable} from "rxjs";
import {Response} from "@angular/http";

@Injectable()
export class AuthService {

  userSignedIn$:Subject<boolean> = new Subject();

  constructor(private authService:Angular2TokenService) {

    // this.authService.validateToken().subscribe(
    //     res => res.status == 200 ? this.userSignedIn$.next(res.json().success) : this.userSignedIn$.next(false)
    // )
  }


// MOVED CODE FROM CONSTRUCTOR INTO IONVIEWCANENTER
// Reason: had a issue constucting angular2tokenserv and auth serv at the same time this spaced it out works fine no known issues currently
//  Maybe take a look when you have more knowledge in the future
ionViewCanEnter(){
      this.authService.validateToken().subscribe(
        res => res.status == 200 ? this.userSignedIn$.next(res.json().success) : this.userSignedIn$.next(false)
    )
}

  logOutUser():Observable<Response>{

    return this.authService.signOut().map(
        res => {
          this.userSignedIn$.next(false);
          // this.router.navigate(['profile']);
          console.log("Am I working??")
          return res;
        }
    );

  }

  registerUser(signUpData:  {email:string, password:string, passwordConfirmation:string}):Observable<Response>{
    return this.authService.registerAccount(signUpData).map(
        res => {
          this.userSignedIn$.next(true);
          return res
        }
    );
  }

  logInUser(signInData: {email:string, password:string}):Observable<Response>{

    return this.authService.signIn(signInData).map(
        res => {
          this.userSignedIn$.next(true);
          return res
        }
    );
  }

}
