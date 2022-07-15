import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-assignment1';
  contact_id: number = 1212;
  contact_name: string = 'Rajat Sharma';
  company: string = 'Next Technologies Pvt Ltd';
  due_amount: number = 54561;
  phone: any = 7798329564;
  area = 'South Zone';
}
 