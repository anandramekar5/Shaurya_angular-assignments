import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Data3Service {
  constructor() {}

  private privatemod = 'this is service using private modifier';

  msgNotify(): string {
    return this.privatemod;
  }
}
