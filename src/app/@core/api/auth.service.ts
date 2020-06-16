import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { concatMap, map, tap } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { GlobalConstants } from 'src/app/global';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private path = GlobalConstants.api + 'user/user/';

  constructor(private http: HttpClient, private router: Router) {}

  obtainAccessToken(loginData): Observable<any> {
    console.log(loginData);

    let loginInfoReturn: any = {
        access_token : '',
        refresh_token : '',
        expires_in : '',
        scope : '',
    };

    let loginDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>([]);

    let data = 'grant_type=password' + '&username=' + loginData.username + '&password=' + loginData.password;
    let reqHeader = new HttpHeaders({
      'Content-Type':'application/x-www-form-urlencoded; charset=utf-8',
      'Accept': 'application/json',
      'Authorization' : 'Basic ' + btoa('angular-app' + ':' + 'iosys')
    });
    return this.http.post('http://localhost:8090/oauth/token', data, {headers: reqHeader}).pipe(
      tap( (jsonResp) => {
      if (jsonResp.error == null) {
        loginInfoReturn = {
          access_token : jsonResp.access_token,
          refresh_token : jsonResp.refresh_token,
          expires_in : jsonResp.expires_in,
          scope : jsonResp.scope,
        };
        // localStorage.setItem('access_token', jsonResp.access_token);
        // localStorage.setItem('refresh_token', jsonResp.refresh_token);
        // localStorage.setItem('expires_in', jsonResp.expires_in);
        // localStorage.setItem('scope', jsonResp.scope);
        console.log('From auth.service.ts obtainToken() AUTH SUCCESS');
        console.log(loginInfoReturn);
        loginDataSubject.next(loginInfoReturn);
        localStorage.setItem('username', loginData.username);
      } else {
        console.log('From auth.service.ts obtainToken() AUTH ERROR');
        console.log(jsonResp.error);
        loginDataSubject = jsonResp;
      }

    },
      err => {
        console.log('error in authentication');
        console.log('error');
      })
    );
  }
 
  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('expires_in');
    localStorage.removeItem('scope');
}
}
