import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { UserstatusPipe } from './userstatus.pipe';
import { RouterModule, Routes } from '@angular/router';
import { Assignment3Component } from './assignment3/assignment3.component';

const routes: Routes = [
  { path: 'assignment1', component: Assignment1Component },
  { path: 'assignment2', component: Assignment2Component },
  { path: 'assignment3', component: Assignment3Component },
];

@NgModule({
  declarations: [
    AppComponent,
    Assignment1Component,
    Assignment2Component,
    UserstatusPipe,
    Assignment3Component,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
