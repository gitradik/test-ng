import { Component, Input, OnInit } from '@angular/core';
import { Layout, PlotData } from 'plotly.js';

@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.scss'],
})
export class PlotComponent implements OnInit {
  @Input() data!: { [x: number]: number };
  @Input() title = '';

  constructor() {}

  ngOnInit(): void {
    this.updateGraphData();
  }

  updateGraphData() {
    this.graph.data = [
      {
        ...this.getData(),
        type: 'scatter',
        mode: 'lines',
        marker: { color: '#af172b' },
      },
    ];
    this.graph.layout.title = this.title;
  }

  graph: { layout: Partial<Layout>; data?: Array<Partial<PlotData>> } = {
    layout: {
      title: this.title,
      xaxis: {
        rangeslider: {},
      },
      yaxis: {
        fixedrange: true,
      },
    },
  };

  getData(): { x: number[]; y: number[] } {
    const keys: Array<number | string> = [];
    for (const x in this.data) {
      if (x && this.data[x]) keys.push(x);
    }
    keys.sort((a, b) => Number(a) - Number(b));
    const data: { x: number[]; y: number[] } = { x: [], y: [] };
    for (const x of keys) {
      const y = this.data[Number(x)];
      data.x.push(Number(x));
      data.y.push(y);
    }
    return data;
  }
}
