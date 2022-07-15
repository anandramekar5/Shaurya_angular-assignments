import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-assignment4',
  templateUrl: './ng-assignment4.component.html',
  styleUrls: ['./ng-assignment4.component.css'],
})
export class NgAssignment4Component implements OnInit {
  arrData: any = [10, 20, 30, 40, 50];
  constructor() {}

  ngOnInit(): void {}
}
