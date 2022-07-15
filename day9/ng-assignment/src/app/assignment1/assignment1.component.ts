import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css'],
})
export class Assignment1Component implements OnInit {
  title = 'My Angular Application';
  trainingFees = 18000;
  todayDate = new Date();
  constructor() {}

  ngOnInit(): void {}
}
