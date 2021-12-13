import { Component, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { NavbarService } from 'src/app/services/navbar.service';
import { SkillService } from '../../services/skill.service';
import { Skill } from 'src/app/model/skill';
import { JobPostService } from '../../services/job-post.service';

@Component({
  selector: 'app-job-posting',
  templateUrl: './job-posting.component.html',
  styleUrls: ['./job-posting.component.scss']
})
export class JobPostingComponent implements OnInit {
  checked = false;
  hide = false;

  skk: Skill[] = [];
  addedSkills: Skill[] = [];
  form!: FormGroup;
  skills = new FormControl();


  constructor( private skillService: SkillService, private fb: FormBuilder, private jobPostService: JobPostService, public nav: NavbarService,) {

  }

  ngOnInit(): void {
    this.nav.show()
    this.skillService.findAllSkills().subscribe((response) => {
      this.skk = response;
      response.forEach(skill => {

      })
    })

    this.form = this.fb.group({
      jobTitle: ['', Validators.required],
      jobDescription: ['', Validators.required],
      startDate: ['', Validators.required],
      priceOfHour: [0, Validators.required],
      numberOfHours: [0, Validators.required],
      addressOfJob: ['', Validators.required],
      fixedPrice: ['', Validators.required],
      fixedPriceValue: [0, Validators.required],
      numberOfPeople: [1, Validators.required],
      jobPostSkills: [[], Validators.required],
      startTime: ['', Validators.required]
    })
  }

  fixedPrice(){
    this.hide = !this.hide;
  }


  onSkillsChange(event: any) {
    this.addedSkills = []
    this.addedSkills.push(event.value);
    console.log(this.addedSkills)
    console.log(event.value)
    console.log(this.skills)
  }

  createJob(form: FormGroup){

    this.jobPostService.createJob(form.value).subscribe(data => {
      return;
    });
  }

}
