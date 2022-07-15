import { Component, OnInit } from '@angular/core';
import { Data1Service } from 'src/app/service/data1.service';

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css'],
})
export class Display1Component implements OnInit {
  msg2: string = '';
  constructor(private d1: Data1Service) {}

  ngOnInit(): void {
    this.msg2 = this.d1.fn1();
  }
}
