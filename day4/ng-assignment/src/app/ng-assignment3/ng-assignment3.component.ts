import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-assignment3',
  templateUrl: './ng-assignment3.component.html',
  styleUrls: ['./ng-assignment3.component.css'],
})
export class NgAssignment3Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  name: any = 'Rahul Sharma';
  designation: any = 'Full Stack Developer';
  leavebalance: any = 10;
}
