import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementComponent } from './measurement.component';
import { MeasurementModule } from './measurement.module';

describe('MeasurementComponent', () => {
  let component: MeasurementComponent;
  let fixture: ComponentFixture<MeasurementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MeasurementModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
