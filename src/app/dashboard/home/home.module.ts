import { NgModule } from '@angular/core';

import { HomeRoutingModule } from '@app/dashboard/home/home-routing.module';
import { HomeComponent } from '@app/dashboard/home/home.component';
import { PartItemModule } from '@app/dashboard/home/part-item/part-item.module';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [HomeRoutingModule, PartItemModule, SharedModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
