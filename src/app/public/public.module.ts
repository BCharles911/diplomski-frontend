import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,

  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule
  ]
})
export class PublicModule { }
