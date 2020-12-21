import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import {
  RestDialogComponent,
  RestDialogConfig,
} from '@shared/components/rest-dialog/rest-dialog.component';
import { LogItem } from '@app/dashboard/log/log.component';
import { LogService } from '@app/core/services/log.service';

@Injectable({
  providedIn: 'root',
})
export class LogDialogService {
  constructor(private modal: NgbModal, private logService: LogService) {}

  create(): NgbModalRef {
    const config: NgbModalOptions = {
      centered: true,
    };

    const dataConfig: RestDialogConfig = {
      title: 'New log entity',
      service: this.logService,
      submitBtnText: 'Create entry',
    };

    const modalRef = this.modal.open(RestDialogComponent, config);
    modalRef.componentInstance.data = dataConfig;

    return modalRef;
  }

  edit(data: LogItem): NgbModalRef {
    const config: NgbModalOptions = {
      centered: true,
    };

    const dataConfig: RestDialogConfig = {
      title: 'Edit log entity',
      service: this.logService,
      submitBtnText: 'Create entry',
      entity: data,
    };

    const modalRef = this.modal.open(RestDialogComponent, config);
    modalRef.componentInstance.data = dataConfig;

    return modalRef;
  }
}
