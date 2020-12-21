import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PlotlyModule } from 'angular-plotly.js';
// @ts-ignore:next-line:no-any
import * as PlotlyJS from 'plotly.js/dist/plotly.js';

import { PlotComponent } from './plot.component';

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  imports: [CommonModule, PlotlyModule],
  declarations: [PlotComponent],
  exports: [PlotComponent],
})
export class PlotModule {}
