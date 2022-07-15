import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-assignment1',
  templateUrl: './ng-assignment1.component.html',
  styleUrls: ['./ng-assignment1.component.css'],
})
export class NgAssignment1Component implements OnInit {
  firstName: any;
  lastName: any;
  constructor() {}

  ngOnInit(): void {}

  onSubmit(fn: any, ln: any) {
    this.firstName = fn;
    this.lastName = ln;
    console.log(this.firstName.value);
  }
}
