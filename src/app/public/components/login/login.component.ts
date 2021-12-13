import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/model/user-login';
import { AuthService } from 'src/app/services/auth.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  isLoggedIn: boolean = false;
  isLoginFailed: boolean = false;
  errorMessage: string = '';
  roles: string[] = [];
  loginUser = new UserLogin();
  hide = true;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService, private tokenStorageService: TokenStorageService,
    public nav: NavbarService) {

    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }



  ngOnInit(): void {
    this.nav.hide();
    if(this.tokenStorageService.getToken()) {
      console.log(this.tokenStorageService.getToken())
      this.isLoggedIn = true;
      window.location.replace('http://localhost:4200/public/home')
    }
  }

  get f(){
    return this.form.controls;
  }


  login() {

    const val = this.form.value;

    if(val.email && val.password) {
      this.authService.login(val.email, val.password)
      .subscribe(
        data => {
          this.loginUser = data;
          this.tokenStorageService.saveToken(this.loginUser.access_token, this.loginUser.expires_in);
          this.tokenStorageService.saveUser(JSON.stringify(this.loginUser.user));
          console.log(this.loginUser.token_type)
          this.isLoggedIn = true;
          this.isLoginFailed = false;
          window.location.replace('http://localhost:4200/public/home')
        },
        err => {
          console.log(err.error.message);
        }
      )
    }
  }

}
