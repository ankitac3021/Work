import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http' //change
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllcandidatesComponent } from './allcandidates/allcandidates.component';
import { InprogressComponent } from './inprogress/inprogress.component';

@NgModule({
  declarations: [
    AppComponent,
    AllcandidatesComponent,
    InprogressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule //change
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
