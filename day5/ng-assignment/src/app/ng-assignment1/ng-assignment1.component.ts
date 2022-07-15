import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-assignment1',
  templateUrl: './ng-assignment1.component.html',
  styleUrls: ['./ng-assignment1.component.css'],
})
export class NgAssignment1Component implements OnInit {
  nameColor: String = '';
  constructor() {}

  ngOnInit(): void {}
  onBlue() {
    this.nameColor = 'Blue';
  }
  onGreen() {
    this.nameColor = 'Green';
  }
  onRed() {
    this.nameColor = 'Red';
  }
}
