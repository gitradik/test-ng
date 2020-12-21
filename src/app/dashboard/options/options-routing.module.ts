import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OptionsComponent } from '@app/dashboard/options/options.component';

const routes: Routes = [{ path: '', component: OptionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class OptionsRoutingModule {}
