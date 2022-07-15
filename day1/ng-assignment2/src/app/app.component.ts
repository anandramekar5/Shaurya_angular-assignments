import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-assignment2';
  fullname = 'Rahul Sharma';
  earning = 8888;
  Status = { Active: 'Yes' };
}
