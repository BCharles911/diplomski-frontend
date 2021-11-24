import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }


  signOut(): void {
    window.localStorage.clear();
  }

  public saveToken(token?: string, expires_in?: number): void {
    window.localStorage.removeItem('access_token');
    window.localStorage.setItem('access_token', token!);
    window.localStorage.setItem('expires_in', expires_in!.toString());
  }

  public getToken(): string {
    return localStorage.getItem('access_token')!;
  }

  public saveUser(user: any): void {
    window.localStorage.removeItem('auth-user');
    window.localStorage.setItem('auth-user', user);
  }

  public getUser(): any {
    return JSON.parse(localStorage.getItem('auth-user')!);
  }
}
