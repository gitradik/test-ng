import { Injectable } from '@angular/core';
import { AlarmItem } from '@app/dashboard/alarm/alarm.component';
import { CmStatusItem } from '@app/dashboard/cm-status/cm-status.component';
import { PartItemState } from '@app/dashboard/home/part-item/part-item-state/part-item-state.component';
import { PartItem } from '@app/dashboard/home/part-item/part-item.component';
import { LogItem } from '@app/dashboard/log/log.component';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  constructor() {}

  isMockLogin = true;

  fetchHomeData(): Observable<PartItem[]> {
    return of([
      {
        name: 'Y_FRI.I',
        partName: '86.602mg',
        img: 'tmp-img-part.png',
        state: PartItemState.SUCCESS,
      },
      {
        name: 'Y_FRI.I',
        partName: '86.602mg',
        img: 'tmp-img-part.png',
        state: PartItemState.SUCCESS,
      },
      {
        name: 'Y_FRI.I',
        partName: '86.602mg',
        img: 'tmp-img-part.png',
        state: PartItemState.ERROR,
      },
      {
        name: 'Y_FRI.I',
        partName: '86.602mg',
        img: 'tmp-img-part.png',
        state: PartItemState.WARNING,
      },
    ]);
  }

  fetchAlarmData(): Observable<AlarmItem[]> {
    return of([
      {
        type: 'Type',
        time: 'Time',
        value: 'Value',
        input: 'Input',
        configurationInput: 'Configuration Input',
        diagnosisName: 'Diagnosis Name',
      },
      {
        type: 'Type',
        time: 'Time',
        value: 'Value',
        input: 'Input',
        configurationInput: 'Configuration Input',
        diagnosisName: 'Diagnosis Name',
      },
      {
        type: 'Type',
        time: 'Time',
        value: 'Value',
        input: 'Input',
        configurationInput: 'Configuration Input',
        diagnosisName: 'Diagnosis Name',
      },
      {
        type: 'Type',
        time: 'Time',
        value: 'Value',
        input: 'Input',
        configurationInput: 'Configuration Input',
        diagnosisName: 'Diagnosis Name',
      },
      {
        type: 'Type',
        time: 'Time',
        value: 'Value',
        input: 'Input',
        configurationInput: 'Configuration Input',
        diagnosisName: 'Diagnosis Name',
      },
      {
        type: 'Type',
        time: 'Time',
        value: 'Value',
        input: 'Input',
        configurationInput: 'Configuration Input',
        diagnosisName: 'Diagnosis Name',
      },
      {
        type: 'Type',
        time: 'Time',
        value: 'Value',
        input: 'Input',
        configurationInput: 'Configuration Input',
        diagnosisName: 'Diagnosis Name',
      },
      {
        type: 'Type',
        time: 'Time',
        value: 'Value',
        input: 'Input',
        configurationInput: 'Configuration Input',
        diagnosisName: 'Diagnosis Name',
      },
      {
        type: 'Type',
        time: 'Time',
        value: 'Value',
        input: 'Input',
        configurationInput: 'Configuration Input',
        diagnosisName: 'Diagnosis Name',
      },
      {
        type: 'Type',
        time: 'Time',
        value: 'Value',
        input: 'Input',
        configurationInput: 'Configuration Input',
        diagnosisName: 'Diagnosis Name',
      },
      {
        type: 'Type',
        time: 'Time',
        value: 'Value',
        input: 'Input',
        configurationInput: 'Configuration Input',
        diagnosisName: 'Diagnosis Name',
      },
      {
        type: 'Type',
        time: 'Time',
        value: 'Value',
        input: 'Input',
        configurationInput: 'Configuration Input',
        diagnosisName: 'Diagnosis Name',
      },
      {
        type: 'Type',
        time: 'Time',
        value: 'Value',
        input: 'Input',
        configurationInput: 'Configuration Input',
        diagnosisName: 'Diagnosis Name',
      },
      {
        type: 'Type',
        time: 'Time',
        value: 'Value',
        input: 'Input',
        configurationInput: 'Configuration Input',
        diagnosisName: 'Diagnosis Name',
      },
    ]);
  }

  fetchLogData(): Observable<LogItem[]> {
    return of([
      {
        timestamp: new Date(),
        category: 'TEST',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        name: 'Name',
      },
      {
        timestamp: new Date(),
        category: 'Category',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        name: 'Name',
      },
      {
        timestamp: new Date(),
        category: 'Category',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        name: 'Name',
      },
      {
        timestamp: new Date(),
        category: 'Category',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        name: 'Name',
      },
      {
        timestamp: new Date(),
        category: 'Category',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        name: 'Name',
      },
      {
        timestamp: new Date(),
        category: 'Category',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        name: 'Name',
      },
    ]);
  }

  fetchCmStatus(): Observable<CmStatusItem[]> {
    return of([
      {
        eventTime: new Date().toISOString(),
        status: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
      },
      {
        eventTime: new Date().toISOString(),
        status: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
      },
      {
        eventTime: new Date().toISOString(),
        status: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
      },
      {
        eventTime: new Date().toISOString(),
        status: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
      },
      {
        eventTime: new Date().toISOString(),
        status: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
      },
      {
        eventTime: new Date().toISOString(),
        status: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
      },
      {
        eventTime: new Date().toISOString(),
        status: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
      },
    ]);
  }
}
