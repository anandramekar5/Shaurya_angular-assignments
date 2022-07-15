import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() {}

  logmessage: string = '';
  loggerData(msg: string): string {
    return msg;
  }
}
