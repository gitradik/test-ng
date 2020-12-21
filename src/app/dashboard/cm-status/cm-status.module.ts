import { NgModule } from '@angular/core';
import { CmStatusComponent } from './cm-status.component';
import { SharedModule } from '@app/shared';
import { CmStatusRoutingModule } from '@app/dashboard/cm-status/cm-status-routing.module';
import { TableModule } from '@app/dashboard/shared/table/table.module';

@NgModule({
  imports: [CmStatusRoutingModule, TableModule, SharedModule],
  declarations: [CmStatusComponent],
})
export class CmStatusModule {}
