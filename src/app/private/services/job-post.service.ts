import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobPost } from 'src/app/model/job-post';


const JOBS_API = 'http://localhost:3000/api/job-posts'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class JobPostService {

  constructor(private http: HttpClient) { }


  createJob(job: JobPost) {

    return this.http.post<JobPost>(JOBS_API + '/create?id=' + JSON.parse(window.localStorage.getItem('auth-user') || '{}').id,
      job
      , httpOptions)
  }


  getAllJobs(): Observable<JobPost[]> {
    return this.http.get<JobPost[]>(JOBS_API + '/get-all')
  }

}
