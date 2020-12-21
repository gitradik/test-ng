import { NgModule } from '@angular/core';

import { AlarmComponent } from './alarm.component';
import { AlarmRoutingModule } from './alarm-routing.module';
import { SharedModule } from '@app/shared';
import { TableModule } from '@app/dashboard/shared/table/table.module';

@NgModule({
  imports: [AlarmRoutingModule, TableModule, SharedModule],
  declarations: [AlarmComponent],
  exports: [AlarmComponent],
})
export class AlarmModule {}
