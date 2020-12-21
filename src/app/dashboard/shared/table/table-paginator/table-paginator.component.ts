import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-paginator',
  templateUrl: './table-paginator.component.html',
  styleUrls: ['./table-paginator.component.scss'],
})
export class TablePaginatorComponent implements OnInit {
  page = 1;

  constructor() {}

  ngOnInit(): void {}
}
