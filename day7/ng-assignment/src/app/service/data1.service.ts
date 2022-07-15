import { Injectable } from '@angular/core';
import { Data2Service } from './data2.service';

@Injectable({
  providedIn: 'root',
})
export class Data1Service {
  constructor(private d2: Data2Service) {}

  fn1(): string {
    let msg = this.d2.fn2();
    return msg;
  }
}
