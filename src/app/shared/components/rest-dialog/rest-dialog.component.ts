import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormField } from '@shared/components/form-fields/form-field.class';
import { FormGroup } from '@angular/forms';
import { FormFieldsService } from '@shared/components/form-fields/form-fields.service';
import { RestBuilder } from '@app/core/services/rest.builder';

export interface RestDialogConfig {
  title: string;
  service: RestBuilder;
  entity?: object;
  maxWidth?: string;
  submitBtnText?: string;
}

@Component({
  selector: 'app-rest-dialog',
  templateUrl: './rest-dialog.component.html',
  styleUrls: ['./rest-dialog.component.scss'],
})
export class RestDialogComponent implements OnInit {
  @Input() data!: RestDialogConfig;

  formFields!: FormField[];
  formGroup!: FormGroup;

  constructor(public modal: NgbActiveModal, private formFieldsService: FormFieldsService) {}

  ngOnInit(): void {
    if (this.data) {
      if (this.data.entity) {
        this.formFields = this.data.service.getEditFormFields(this.data.entity);
      } else {
        this.formFields = this.data.service.getCreateFormFields();
      }
      this.formGroup = this.formFieldsService.getFormGroup(this.formFields);
    }
  }

  close(): void {
    this.formGroup.reset();
    this.modal.dismiss();
  }

  submit(): void {}
}
