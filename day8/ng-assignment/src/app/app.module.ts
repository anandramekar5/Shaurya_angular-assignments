import { RouterTestingModule } from '@angular/router/testing';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameComponent } from './employee/name/name.component';
import { EmailComponent } from './employee/email/email.component';
import { DisplayComponent } from './assignment1/display/display.component';
import { Display2Component } from './assignment2/display2/display2.component';
import { EmployeesModule } from './assignment2/employees/employees.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'display', component: DisplayComponent },
  { path: 'display2', component: Display2Component },
];

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    EmailComponent,
    DisplayComponent,
    Display2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeesModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
