import { Component, OnInit } from '@angular/core';
import { Data2Service } from '../data2.service';

@Component({
  selector: 'app-display2',
  templateUrl: './display2.component.html',
  styleUrls: ['./display2.component.css'],
})
export class Display2Component implements OnInit {
  constructor(private emp: Data2Service) {
    console.log(emp.fn1());
  }

  ngOnInit(): void {}
}
