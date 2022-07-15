import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class MsgDisplayService {
  constructor(private logmsg: LoggerService) {}

  displayMessage() {
    return this.logmsg.loggerData('admin logged at 11 am');
  }
}
