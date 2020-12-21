import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { OptionsType } from '@app/core/services/options.service';
import { OptionsDialogComponent } from '@app/dashboard/options/options-dialog/options-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class OptionsDialogService {
  constructor(private modal: NgbModal) {}

  view(data: OptionsType): NgbModalRef {
    const config: NgbModalOptions = {
      centered: true,
      size: 'lg',
    };

    const modalRef = this.modal.open(OptionsDialogComponent, config);
    modalRef.componentInstance.data = data;

    return modalRef;
  }

  edit(): void {}
}
