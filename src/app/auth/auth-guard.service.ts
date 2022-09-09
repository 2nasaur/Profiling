import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService : AuthService, private route : Router) { }

  canActivate(){
    if(this.authService.islogin()){
      return true;
    }
    alert("ACCESS DENIED!")
    this.route.navigate(['login-page']);
    return false;
  }
}	