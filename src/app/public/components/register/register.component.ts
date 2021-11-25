import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;
  isLoggedIn: boolean = false;
  errorMessage: string = '';
  roles: string[] = [];

  constructor(public nav: NavbarService) { }

  ngOnInit(): void {
    this.nav.hide();
  }

  register(){

  }

}
