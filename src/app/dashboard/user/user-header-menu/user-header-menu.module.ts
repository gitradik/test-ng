import { NgModule } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { UserHeaderMenuComponent } from './user-header-menu.component';

@NgModule({
  imports: [NgbDropdownModule],
  declarations: [UserHeaderMenuComponent],
  exports: [UserHeaderMenuComponent],
})
export class UserHeaderMenuModule {}
