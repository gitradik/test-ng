import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { SidebarMenuComponent } from '@app/dashboard/sidebar-menu/sidebar-menu.component';
import { SidebarMenuItemComponent } from '@app/dashboard/sidebar-menu/sidebar-menu-item/sidebar-menu-item.component';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [RouterModule, SharedModule],
  declarations: [SidebarMenuComponent, SidebarMenuItemComponent],
  exports: [SidebarMenuComponent],
})
export class SidebarMenuModule {}
