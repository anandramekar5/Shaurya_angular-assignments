import { NONE_TYPE } from '@angular/compiler';
import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  ColorType: Color = Color.None;

  Change(colornum: any) {
    if (colornum === 1) {
      this.ColorType = Color.Blue;
    } else if (colornum === 2) {
      this.ColorType = Color.Yellow;
    } else if (colornum === 3) {
      this.ColorType = Color.Red;
    } else if (colornum === 4) {
      this.ColorType = Color.Black;
    }
  }
}
enum Color {
  None = 'None',
  Red = 'Red',
  Yellow = 'Yellow',
  Blue = 'Blue',
  Black = 'Black',
}
