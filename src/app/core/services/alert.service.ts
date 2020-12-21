import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

enum AlertTypeColor {
  ERROR = '#AF172B',
  WARNING = '#FDCD00',
  SUCCESS = '#00CC00',
}

export interface AlertType {
  icon: string; // name of image that are in assets/images
  message: string;
  color: AlertTypeColor;
}

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private _alert = new Subject<AlertType | null>();

  constructor() {}

  get alert(): Observable<AlertType | null> {
    return this._alert.asObservable();
  }

  deleteMessage(): void {
    this._alert.next(null);
  }

  error(msg: string): void {
    this._alert.next({
      icon: 'bell.svg',
      message: msg,
      color: AlertTypeColor.ERROR,
    });
  }

  success(msg: string): void {
    this._alert.next({
      icon: 'bell.svg',
      message: msg,
      color: AlertTypeColor.SUCCESS,
    });
  }

  warning(msg: string): void {
    this._alert.next({
      icon: 'bell.svg',
      message: msg,
      color: AlertTypeColor.WARNING,
    });
  }
}
