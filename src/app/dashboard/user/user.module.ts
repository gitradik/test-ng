import { NgModule } from '@angular/core';
import { UserHeaderMenuModule } from '@app/dashboard/user/user-header-menu/user-header-menu.module';
import { UserHeaderMenuComponent } from '@app/dashboard/user/user-header-menu/user-header-menu.component';

@NgModule({
  imports: [UserHeaderMenuModule],
  declarations: [],
  exports: [UserHeaderMenuComponent],
})
export class UserModule {}
