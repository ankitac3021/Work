import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'  //change here

@Injectable({
  providedIn: 'root'
})
export class AllcandidatesService {

  constructor(private http:HttpClient) { }    //change here

  getDetails(){
    return this.http.get("http://localhost:3000/CandidateInfo");
  }
}
