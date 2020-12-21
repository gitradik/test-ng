import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldsComponent } from './form-fields.component';
import { FormFieldsModule } from '@shared/components/form-fields/form-fields.module';

describe('FormFieldsComponent', () => {
  let component: FormFieldsComponent;
  let fixture: ComponentFixture<FormFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormFieldsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
