import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportDataDialogComponent } from './export-data-dialog.component';
import { ExportDataDialogModule } from './export-data-dialog.module';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

describe('ExportDataDialogComponent', () => {
  let component: ExportDataDialogComponent;
  let fixture: ComponentFixture<ExportDataDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ExportDataDialogModule],
      providers: [NgbActiveModal],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportDataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
