import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'assignment';
  resid: any = 0;

  empdata: any = [
    { empid: 1, empname: 'peter parker', empsalary: '55000' },
    { empid: 2, empname: 'louis phonsi', empsalary: '96000' },
    { empid: 3, empname: 'henry nicolus', empsalary: '78000' },
    { empid: 4, empname: 'albert hayden', empsalary: '89000' },
  ];

  empPushedData: any = [];

  onSelect(selectedData: any) {
    // console.log(this.resid);

    this.empPushedData.push(selectedData);
  }
}
