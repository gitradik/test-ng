import { Component, OnDestroy, OnInit } from '@angular/core';

import { OptionsService, OptionsType } from '@app/core/services/options.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { OptionsDialogService } from '@app/core/services/dialogs/options-dialog.service';

@Component({
  selector: 'app-options-header-menu',
  templateUrl: './options-header-menu.component.html',
  styleUrls: ['./options-header-menu.component.scss'],
})
export class OptionsHeaderMenuComponent implements OnDestroy, OnInit {
  options!: OptionsType;

  private _destroy = new Subject<OptionsType>();

  constructor(
    private optionsDialogService: OptionsDialogService,
    private optionsService: OptionsService,
  ) {}

  ngOnDestroy(): void {
    this._destroy.next();
    this._destroy.complete();
  }

  ngOnInit(): void {
    this.optionsService.options
      .pipe(takeUntil(this._destroy))
      .subscribe(options => (this.options = options));
  }

  openViewDialog(): void {
    this.optionsDialogService.view(this.options);
  }
}
