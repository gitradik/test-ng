import { NgModule } from '@angular/core';

import { TableRowPipe } from '@app/dashboard/shared/table/table-row.pipe';
import { TableComponent } from '@app/dashboard/shared/table/table.component';
import { TablePaginatorModule } from '@app/dashboard/shared/table/table-paginator/table-paginator.module';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [TablePaginatorModule, SharedModule],
  declarations: [TableComponent, TableRowPipe],
  exports: [TableComponent],
})
export class TableModule {}
