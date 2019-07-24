import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AllcandidatesService } from '../allcandidates.service'   //changes here
@Component({
  selector: 'app-allcandidates',
  templateUrl: './allcandidates.component.html',
  styleUrls: ['./allcandidates.component.css']
})
export class AllcandidatesComponent implements OnInit {
  users:object;
  isCollapse:boolean[]=[];
  
  constructor(private data:AllcandidatesService) { }  //changes here
  
  ngOnInit() {
    this.data.getDetails().subscribe(data => {     //changes here
      this.users=data

      //this.userstr=JSON.stringify(this.users);
      //this.userstr1=JSON.parse(this.userstr);
      console.log(this.users);
      
    }
    );
  }
  toggleCollapse(id){
    this.isCollapse[id]=!this.isCollapse[id];
}
  
}
