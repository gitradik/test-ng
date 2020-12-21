import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CmStatusComponent } from '@app/dashboard/cm-status/cm-status.component';

const routes: Routes = [{ path: '', component: CmStatusComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class CmStatusRoutingModule {}
