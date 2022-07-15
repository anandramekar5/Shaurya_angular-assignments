import { EmptyExpr } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

interface EmployeeDetails {
  contactname: string;
  contactaddress: string;
  contactnumber: string;
  areacode: string;
}

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css'],
})
export class Assignment1Component implements OnInit {
  cn: string = '';
  ca: string = '';
  cnum: string = '';
  ac: string = '';
  constructor() {}

  ngOnInit(): void {}

  display() {
    let arrEmp: EmployeeDetails = {
      contactname: 'Nidhi Singh',
      contactaddress: 'house no. 12345',
      contactnumber: '98741212',
      areacode: 'South Zone',
    };

    this.cn = arrEmp.contactname;
    this.ca = arrEmp.contactaddress;
    this.cnum = arrEmp.contactnumber;
    this.ac = arrEmp.areacode;
    console.log(arrEmp);
  }
}
