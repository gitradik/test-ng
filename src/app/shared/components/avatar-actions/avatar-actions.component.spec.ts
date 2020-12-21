import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarActionsComponent } from './avatar-actions.component';

describe('AvatarActionsComponent', () => {
  let component: AvatarActionsComponent;
  let fixture: ComponentFixture<AvatarActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AvatarActionsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
