import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from '@app/dashboard/dashboard-routing.module';
import { DashboardComponent } from '@app/dashboard/dashboard.component';
import { SidebarMenuModule } from '@app/dashboard/sidebar-menu/sidebar-menu.module';
import { SharedModule } from '@app/shared';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderToolbarModule } from './header-toolbar/header-toolbar.module';
import { OptionsHeaderMenuModule } from './options/options-header-menu/options-header-menu.module';
import { UserModule } from './user/user.module';

@NgModule({
  imports: [
    DashboardRoutingModule,
    NgbAlertModule,
    HeaderToolbarModule,
    OptionsHeaderMenuModule,
    SidebarMenuModule,
    UserModule,
    SharedModule,
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
})
export class DashboardModule {}
