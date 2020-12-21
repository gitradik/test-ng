import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDialogComponent } from './confirm-dialog.component';
import { ConfirmDialogModule } from '@shared/components/confirm-dialog/confirm-dialog.module';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

describe('ConfirmDialogComponent', () => {
  let component: ConfirmDialogComponent;
  let fixture: ComponentFixture<ConfirmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ConfirmDialogModule],
      providers: [NgbActiveModal],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
