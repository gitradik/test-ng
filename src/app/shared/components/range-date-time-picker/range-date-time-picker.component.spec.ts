import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeDateTimePickerComponent } from './range-date-time-picker.component';
import { RangeDateTimePickerModule } from './range-date-time-picker.module';

describe('RangeDateTimePickerComponent', () => {
  let component: RangeDateTimePickerComponent;
  let fixture: ComponentFixture<RangeDateTimePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RangeDateTimePickerModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeDateTimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
