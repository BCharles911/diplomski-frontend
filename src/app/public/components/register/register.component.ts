import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { NavbarService } from 'src/app/services/navbar.service';
import { ConfirmedValidator } from 'src/app/_common/custom.validator';
import countries from 'src/app/_files/srbija-svi-gradovi.json';
import {map, startWith} from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';



export interface City {

  zip: string;
  city: string;
  county: string;
  belongsTo: string;
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  myControl = new FormControl();
  form!: FormGroup;
  isLoggedIn: boolean = false;
  errorMessage: string = '';
  roles: string[] = [];
  hide = true;
  public cityList: City[] = countries;
  filteredCities?: Observable<City[]>;
  errorRegistration = false;
  constructor(private fb: FormBuilder, public nav: NavbarService, private userService: UserService) { }

  ngOnInit(): void {


    this.filteredCities = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.city)),
      map(city => (city ? this._filter(city) : this.cityList.slice()))
    );
    this.nav.hide();

    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(8)]],

      user: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      role: ['', Validators.required],
      city: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    }, {
    validator: ConfirmedValidator('password', 'confirm_password') })
  }
  get f(){
    return this.form.controls;
  }

  register(){
    this.form.value.city = this.myControl.value
    console.log(this.form.value)

    this.userService.createNewUser(this.form.value).subscribe(
      data => {
        console.log(data)
        //window.location.replace('public/login');
      },
      err => {
        this.errorRegistration = true;
        setTimeout(() => {
          this.errorRegistration = false;
        }, 2000);
        this.errorMessage = err.error.message;
        console.log(err.error.message)
      }
    )
  }

  displayFn(city: City): string {
    return city && city.city ? city.city : '';
  }

  private _filter(city: string): City[] {
    const filterValue = city.toLowerCase();

    return this.cityList.filter(option => option.city.toLowerCase().includes(filterValue));
  }

}
