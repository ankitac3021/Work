import { Component, OnInit } from '@angular/core'; 
import { InprogressService } from '../inprogress.service'; //change here

@Component({
  selector: 'app-inprogress',
  templateUrl: './inprogress.component.html',
  styleUrls: ['./inprogress.component.css']
})
export class InprogressComponent implements OnInit {
    candidate:object;
    isCollapse:boolean[]=[];

  constructor(private data:InprogressService) { }

  ngOnInit() {
    this.data.getProgressDetails().subscribe(data => {     //changes here
      this.candidate=data
      console.log(this.candidate);
      
    }
    );
    for(var i in this.candidate)
      this.isCollapse.push(true);
  }
  toggleCollapse(id){
    this.isCollapse[id]=!this.isCollapse[id];
}

}
