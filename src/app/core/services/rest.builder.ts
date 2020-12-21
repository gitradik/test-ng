import { Observable } from 'rxjs';
import { FormField } from '@shared/components/form-fields/form-field.class';

export interface RestBuilder {
  create(input: Record<string, any>): Observable<any>;
  update(input: Record<string, any>): Observable<any>;
  delete(input: Record<string, any>): Observable<any>;

  getCreateFormFields(): FormField[];
  getEditFormFields(value: Record<string, any>): FormField[];
}

export const initCreateFormFields = (fields: FormField[]): FormField[] => {
  return fields.map(field => {
    field.formControl.setValue(null);

    return field;
  });
};

export const initEditFormFields = (
  fields: FormField[],
  value: Record<string, any>,
): FormField[] => {
  return fields.map(field => {
    if (value[field.name]) {
      field.formControl.setValue(value[field.name]);
    }

    return field;
  });
};
