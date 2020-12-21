import { NgModule } from '@angular/core';

import { LogComponent } from './log.component';
import { LogRoutingModule } from '@app/dashboard/log/log-routing.component';
import { TableModule } from '@app/dashboard/shared/table/table.module';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [LogRoutingModule, TableModule, SharedModule],
  declarations: [LogComponent],
  exports: [LogComponent],
})
export class LogModule {}
