import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePaginatorComponent } from './table-paginator.component';
import { TablePaginatorModule } from '@app/dashboard/shared/table/table-paginator/table-paginator.module';

describe('TablePaginatorComponent', () => {
  let component: TablePaginatorComponent;
  let fixture: ComponentFixture<TablePaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TablePaginatorModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
