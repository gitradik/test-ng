import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmStatusComponent } from './cm-status.component';

describe('CmStatusComponent', () => {
  let component: CmStatusComponent;
  let fixture: ComponentFixture<CmStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CmStatusComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
