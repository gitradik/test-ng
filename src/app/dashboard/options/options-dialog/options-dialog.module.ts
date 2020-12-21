import { NgModule } from '@angular/core';

import { OptionsDialogService } from '@app/core/services/dialogs/options-dialog.service';
import { OptionsDialogComponent } from './options-dialog.component';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [SharedModule],
  declarations: [OptionsDialogComponent],
  entryComponents: [OptionsDialogComponent],
  providers: [OptionsDialogService],
  exports: [OptionsDialogComponent],
})
export class OptionsDialogModule {}
