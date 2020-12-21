import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderToolbarComponent } from './header-toolbar.component';
import { HeaderToolbarModule } from '@app/dashboard/header-toolbar/header-toolbar.module';

describe('HeaderToolbarComponent', () => {
  let component: HeaderToolbarComponent;
  let fixture: ComponentFixture<HeaderToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HeaderToolbarModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
