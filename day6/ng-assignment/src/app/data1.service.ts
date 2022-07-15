import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Data1Service {
  constructor() {}

  public publicMod = 'this is service using public modifier';
}
