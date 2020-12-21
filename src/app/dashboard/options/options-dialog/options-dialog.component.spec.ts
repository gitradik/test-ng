import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsDialogComponent } from './options-dialog.component';
import { OptionsDialogModule } from '@app/dashboard/options/options-dialog/options-dialog.module';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

describe('OptionsDialogComponent', () => {
  let component: OptionsDialogComponent;
  let fixture: ComponentFixture<OptionsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [OptionsDialogModule],
      providers: [NgbActiveModal],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
