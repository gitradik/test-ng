import { NgModule } from '@angular/core';

import { OptionsComponent } from '@app/dashboard/options/options.component';
import { OptionsRoutingModule } from '@app/dashboard/options/options-routing.module';
import { OptionsDialogModule } from '@app/dashboard/options/options-dialog/options-dialog.module';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [OptionsRoutingModule, OptionsDialogModule, SharedModule],
  declarations: [OptionsComponent],
  exports: [OptionsComponent],
})
export class OptionsModule {}
