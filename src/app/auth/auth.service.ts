import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { environment } from './../../environments/environment';
import { map, catchError, retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // authURL= environment.apiURL+ 'user/auth';

  constructor(private http : HttpClient) { }


  islogin(){
    return !!localStorage.getItem('token')
  }

  // login(formdata:any): Observable<any> {
  //   const options = { headers: new HttpHeaders({'Content-type': 'application/json'}) };
  //   return this.http
  //     .post<any>(this.authURL, formdata, options)
  //     .pipe(
  //       map(data => data),
  //       retry(3),
        
  //     );
  // }

  public isAuthenticated() : Boolean {
    let userData = localStorage.getItem('userInfo')
    if(userData && JSON.parse(userData)){
      return true;
    }
    return false;
  }



  
}