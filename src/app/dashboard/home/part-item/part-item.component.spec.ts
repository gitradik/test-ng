import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartItemComponent } from './part-item.component';
import { PartItemModule } from '@app/dashboard/home/part-item/part-item.module';

describe('PartItemComponent', () => {
  let component: PartItemComponent;
  let fixture: ComponentFixture<PartItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PartItemModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
