import { Data2Service } from './../../data2.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display3',
  templateUrl: './display3.component.html',
  styleUrls: ['./display3.component.css'],
})
export class Display3Component implements OnInit {
  constructor() {}

  staticmod2: string = '';
  ngOnInit(): void {
    const Result1 = Data2Service.staticMod;
    this.staticmod2 = Result1;
  }
}
