import { NgModule } from '@angular/core';

import { OptionsHeaderMenuComponent } from './options-header-menu.component';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [SharedModule],
  declarations: [OptionsHeaderMenuComponent],
  exports: [OptionsHeaderMenuComponent],
})
export class OptionsHeaderMenuModule {}
