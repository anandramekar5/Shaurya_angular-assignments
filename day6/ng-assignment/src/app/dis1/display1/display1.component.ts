import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display1',
  template: '<h1>This is display 1 component</h1>',
  styles: ['h1 {color:red}'],
})
export class Display1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
