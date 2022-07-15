import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Data2Service {
  constructor() {}

  static staticMod = 'this is service using static modifier';
}
