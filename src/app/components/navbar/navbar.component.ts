import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  homeComponent = 'bg-dashlane'
  toggle = false;
  open = false;
  showMenu = false;
  role = '';
  @Input() loggedShow?: boolean;
  constructor(public nav: NavbarService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.role = JSON.parse(window.localStorage.getItem('auth-user') || '{}').role
    console.log(this.loggedShow)
  }

  logout(){
    this.authService.logout();
    window.location.replace('http://localhost:4200/public/home')
  }
  toggleNavbar(){
    console.log(this.showMenu)
    this.showMenu = !this.showMenu;
  }

}
