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

  toggle = false;
  open = false;
  showMenu = false;
  @Input() loggedShow?: boolean;
  constructor(public nav: NavbarService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    console.log(this.loggedShow)
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['public/login']);
  }
  toggleNavbar(){
    console.log(this.showMenu)
    this.showMenu = !this.showMenu;
  }

}
