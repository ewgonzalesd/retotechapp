import {Injectable} from '@angular/core';

@Injectable()
export class LoggerService {
  static log(msg: string): void {
  }

  static error(msg: string, obj = {}): void {
    console.error(msg, obj);
  }
}
