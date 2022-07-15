import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Data2Service {
  constructor() {}

  fn2(): string {
    console.log('this is function fn2 from service');
    return 'hi! I am service 2';
  }
}
