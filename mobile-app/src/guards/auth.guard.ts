import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../providers/auth-service/auth-service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor (private authService:AuthService){

  }

  canActivate() {
    if(this.authService.loggedIn()) {
      return true;
    } else {

      return false;
    }
  }
}

