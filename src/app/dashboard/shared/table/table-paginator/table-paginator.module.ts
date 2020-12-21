import { NgModule } from '@angular/core';
import { TablePaginatorComponent } from './table-paginator.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [NgbPaginationModule],
  declarations: [TablePaginatorComponent],
  exports: [TablePaginatorComponent],
})
export class TablePaginatorModule {}
