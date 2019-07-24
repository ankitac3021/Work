import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class InprogressService {

  constructor(private http:HttpClient) { }

  getProgressDetails(){
    return this.http.get("http://localhost:3000/CandidateInfo");
  }
}
