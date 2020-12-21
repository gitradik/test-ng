import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestDialogComponent } from './rest-dialog.component';
import { RestDialogModule } from '@shared/components/rest-dialog/rest-dialog.module';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

describe('RestDialogComponent', () => {
  let component: RestDialogComponent;
  let fixture: ComponentFixture<RestDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RestDialogModule],
      providers: [
        NgbActiveModal,
        {
          provide: NgbActiveModal,
          useValue: {
            data: {
              service: {
                getCreateFormFields: () => [
                  {
                    name: 'test',
                    label: 'Test Label',
                  },
                ],
              },
            },
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
