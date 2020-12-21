import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface OptionsType {
  facilityName: string;
  description: string;
  gudelId: string;
  equipmentNumber: string;
  conditionMonitoringSerialNumber: string;
  location: string;
  color: string;
}

@Injectable({
  providedIn: 'root',
})
export class OptionsService {
  private _options = new Subject<OptionsType>();

  constructor() {}

  get options(): Observable<OptionsType> {
    return this._options.asObservable();
  }

  setOptions(options: OptionsType): void {
    this._options.next(options);
  }
}
