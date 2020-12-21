import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartItemStateComponent } from './part-item-state.component';

describe('PartItemStateComponent', () => {
  let component: PartItemStateComponent;
  let fixture: ComponentFixture<PartItemStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PartItemStateComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartItemStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
