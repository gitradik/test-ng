import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeDatePickerComponent } from './range-date-picker.component';
import { RangeDatePickerModule } from '@shared/components/range-date-picker/range-date-picker.module';
import { DatePickerModule } from '@shared/components/date-picker/date-picker.module';

describe('RangeDatePickerComponent', () => {
  let component: RangeDatePickerComponent;
  let fixture: ComponentFixture<RangeDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RangeDatePickerModule, DatePickerModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
