import { Component, OnInit } from '@angular/core';
import { Service1Service } from 'src/app/service1.service';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css'],
})
export class EmployeeDataComponent implements OnInit {
  employeeData: any = [];
  firstName: any;
  searchText: any;

  constructor(private empData: Service1Service) {}
  ngOnInit(): void {
    this.empData.getData().subscribe((empInfo) => {
      this.employeeData = empInfo;
    });
  }
  onDelete(employeeId: any) {
    // console.log(employeeId);
    this.empData.deleteEmployeeData(employeeId).subscribe((result) => {
      console.log(employeeId);
      this.ngOnInit();
    });
  }
}
