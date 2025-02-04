import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogComponent } from '@app/dashboard/log/log.component';

const routes: Routes = [{ path: '', component: LogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class LogRoutingModule {}
