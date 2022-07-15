import { Component, OnInit } from '@angular/core';
import { MsgDisplayService } from 'src/app/service/msg-display.service';

@Component({
  selector: 'app-display2',
  templateUrl: './display2.component.html',
  styleUrls: ['./display2.component.css'],
})
export class Display2Component implements OnInit {
  m2: any = '';
  constructor(private msgdi: MsgDisplayService) {}

  ngOnInit(): void {
    this.m2 = this.msgdi.displayMessage();
  }
}
