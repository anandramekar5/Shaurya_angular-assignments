import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ng-assignment2',
  templateUrl: './ng-assignment2.component.html',
  styleUrls: ['./ng-assignment2.component.css'],
})
export class NgAssignment2Component implements OnInit {
  constructor() {}

  empcode: string = '';
  empdept: string = '';
  ngOnInit(): void {}

  onSend() {}
}
