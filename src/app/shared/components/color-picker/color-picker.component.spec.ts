import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPickerComponent } from './color-picker.component';
import { ColorPickerModule } from '@shared/components/color-picker/color-picker.module';

describe('ColorPickerComponent', () => {
  let component: ColorPickerComponent;
  let fixture: ComponentFixture<ColorPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ColorPickerModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
