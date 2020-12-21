import { NgModule } from '@angular/core';
import { PartItemComponent } from '@app/dashboard/home/part-item/part-item.component';
import { PartItemStateComponent } from '@app/dashboard/home/part-item/part-item-state/part-item-state.component';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [SharedModule],
  declarations: [PartItemComponent, PartItemStateComponent],
  exports: [PartItemComponent],
})
export class PartItemModule {}
