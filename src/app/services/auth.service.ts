import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserI } from '../model/user.interface';
import * as moment from 'moment';



const AUTH_API = 'http://localhost:3000/api/users'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {

    return this.http.post(AUTH_API + '/login', {
      email: email,
      password: password
    }, httpOptions)
  }


  private setSession(authResult: any) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('access_token', authResult.idToken);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf));
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_in');
  }

  public isLoggedIn(){
    return moment().isBefore(this.getExpiration());
  }

  public isLoggedOut(){
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_in');
    const expiresAt = JSON.parse(expiration!);
    return moment(expiresAt);
  }
}
