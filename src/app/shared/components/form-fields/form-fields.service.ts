import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { FormField } from '@shared/components/form-fields/form-field.class';

interface Controls {
  [key: string]: AbstractControl;
}

@Injectable({
  providedIn: 'root',
})
export class FormFieldsService {
  constructor() {}

  getFormGroup(fields: FormField[] = []): FormGroup {
    const controls: Controls = {};
    fields.forEach(field => {
      controls[field.name] = field.formControl;
    });
    return new FormGroup(controls);
  }
}
