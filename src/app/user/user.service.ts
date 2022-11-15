import { Injectable } from '@angular/core';
import { throwError,Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError, retry } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

    testUrl = '';
    profileUrl = environment.apiUrl + '/primary';
    allProfileUrl = environment.apiUrl + '/allPrimary';
    secondaryProfileUrl = environment.apiUrl + '/secondary';


  constructor(private http:HttpClient) { }

  addProfile(profiledata: any, jwtToken: any): Observable<any> {
    const options = { headers: new HttpHeaders({'Content-Type':  'application/json', Authorization: jwtToken})};
    return this.http
      .post<any>(this.profileUrl, profiledata, options)
      .pipe(
        map(data => data),
        retry(3),
        catchError(this.handleError)
      );
  }

  addSecondaryProfile(secondarydata: any, jwtToken: any): Observable<any> {
    const options = { headers: new HttpHeaders({'Content-Type':  'application/json', Authorization: jwtToken})};
    return this.http
      .post<any>(this.secondaryProfileUrl, secondarydata, options)
      .pipe(
        map(data => data),
        retry(3),
        catchError(this.handleError)
      );
  }

  viewAllProfile(jwt: any,page:any,pageSize:any){
    let options = { headers: new HttpHeaders(
      {'Authorization':jwt}),params: new HttpParams().
      set('page',page).
      set('size',pageSize)
    };
    return this.http.get<any>(this.allProfileUrl,options).pipe(
      map(data=>data),
      retry(3),
      catchError(this.handleError)
    );
  }

  viewProfile(jwt: any,profileID: any):Observable<any>{
    let options = { headers : new HttpHeaders({'Content-Type':'application/json'}),params: new HttpParams().set('id',profileID)}
    return this.http.get<any>(this.profileUrl,options).pipe(
      map(data=>data),
      retry(3),
      catchError(this.handleError)
    );
  }

  
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
