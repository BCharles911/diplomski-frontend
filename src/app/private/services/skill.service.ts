import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from 'src/app/model/skill';
import { map, startWith } from 'rxjs/operators';

const AUTH_API = 'http://localhost:3000/api/skills'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http: HttpClient) { }


  findAllSkills(): Observable<Skill[]> {
    return  this.http.get<Skill[]>(AUTH_API + "/all")
  }
}
