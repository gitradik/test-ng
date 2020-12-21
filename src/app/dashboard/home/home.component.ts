import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { PartItem } from '@app/dashboard/home/part-item/part-item.component';
import { MockDataService } from '@app/core/services/mock-data.service';
import { OptionsService } from '@app/core/services/options.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // Temporary hard code
  parts: Observable<PartItem[]>;

  constructor(private mockDataService: MockDataService, private optionsService: OptionsService) {
    this.parts = mockDataService.fetchHomeData().pipe(take(1));
  }

  ngOnInit(): void {
    this.optionsService.options.subscribe(data => {});
  }
}
