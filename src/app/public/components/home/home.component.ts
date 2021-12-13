import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NavbarService } from 'src/app/services/navbar.service';
import '@themesberg/flowbite';
import { JobPostService } from 'src/app/private/services/job-post.service';
import { JobPost } from 'src/app/model/job-post';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  role = '';
  jobs: JobPost[] = [];
  errorRetreive = false;
    constructor(public nav: NavbarService, private authService: AuthService, private router: Router,
      private jobPostService: JobPostService,) { }

  ngOnInit(): void {
    this.nav.show();
    this.jobPostService.getAllJobs().subscribe(
      response => {
        this.jobs = response
      },
      error => {
        this.errorRetreive = true;
        console.log(error);
      },
      () => {
        console.log("Request completed!")
      }
    )
  }



}
