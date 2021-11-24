import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private tokenStorageService: TokenStorageService, router: Router, private authService: AuthService) {
    if(authService.isLoggedIn()) {
      router.navigate(['home'])
    }
  }
  title = 'diplomski-frontend';
  isLoggedIn = false;
  showAdminBoard = false;



  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      this.isLoggedIn = true;
    }
  }
}
