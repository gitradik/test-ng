import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsHeaderMenuComponent } from './options-header-menu.component';

describe('OptionsHeaderMenuComponent', () => {
  let component: OptionsHeaderMenuComponent;
  let fixture: ComponentFixture<OptionsHeaderMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OptionsHeaderMenuComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsHeaderMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
