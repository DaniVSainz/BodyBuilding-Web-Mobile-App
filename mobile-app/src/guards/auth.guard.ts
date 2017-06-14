import { Injectable }     from '@angular/core';
import {CanActivate} from "@angular/router";
import {Angular2TokenService} from "angular2-token";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authTokenService:Angular2TokenService,
              ){}

  canActivate() {
    if(this.authTokenService.userSignedIn()){
      return true;
    }else{
      return false;
    }
  }

}
