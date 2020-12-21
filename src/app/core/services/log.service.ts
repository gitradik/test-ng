import { Injectable } from '@angular/core';

import {
  initCreateFormFields,
  initEditFormFields,
  RestBuilder,
} from '@app/core/services/rest.builder';
import { LogItem } from '@app/dashboard/log/log.component';
import { FieldType, FormField } from '@shared/components/form-fields/form-field.class';
import { Observable, of } from 'rxjs';

const formFields: FormField[] = [
  new FormField({
    name: 'description',
    label: 'Description',
    required: true,
    type: FieldType.TEXTAREA,
  }),
  new FormField({
    name: 'category',
    label: 'Category',
    required: true,
    type: FieldType.DROPDOWN,
    placeholder: 'Choose category',
    maxWidth: '100%',
    options: ['category 1', 'category 2', 'category 3', 'category 4', 'category 5', 'category 6'],
  }),
];

@Injectable({
  providedIn: 'root',
})
export class LogService implements RestBuilder {
  constructor() {}

  create(input: Record<string, object>): Observable<object> {
    return of({});
  }

  update(input: Record<string, object>): Observable<object> {
    return of({});
  }

  delete(input: Record<string, object>): Observable<object> {
    return of({});
  }

  getCreateFormFields(): FormField[] {
    return initCreateFormFields(formFields);
  }

  getEditFormFields(value: Partial<LogItem>): FormField[] {
    return initEditFormFields(formFields, value);
  }
}
