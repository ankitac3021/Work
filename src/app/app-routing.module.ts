import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllcandidatesComponent } from './allcandidates/allcandidates.component'; //changes here
import { InprogressComponent } from './inprogress/inprogress.component';

const routes: Routes = [
  {path:"",redirectTo:"/allCandidates",pathMatch:"full"},
  {path:"allCandidates",component:AllcandidatesComponent}, //changes here
  {path:"inprogress",component:InprogressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
