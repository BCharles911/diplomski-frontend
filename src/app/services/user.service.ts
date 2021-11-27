import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRegister } from '../model/user-register';

const USER_URL = 'http://localhost:3000/api/users'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};




@Injectable({
  providedIn: 'root'
})
export class UserService {

  newUser: UserRegister = new UserRegister();

  constructor(private http: HttpClient) { }


  public createNewUser(form: any) {

    return this.http.post<UserRegister>(USER_URL, {
      firstName: form.firstName,
      lastName: form.lastName,
      username: form.username,
      password: form.password,
      city: form.city,
      email: form.email,
      phoneNumber: form.phoneNumber,
      dateOfBirth: form.dateOfBirth,
      role: form.role
    }, httpOptions)
  }


}
