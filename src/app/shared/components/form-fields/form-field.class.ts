import { AbstractControl, FormControl, ValidatorFn, Validators } from '@angular/forms';

export enum FieldType {
  TEXT = 'text',
  TEXTAREA = 'textarea',
  NUMBER = 'number',
  COLOR = 'color',
  DROPDOWN = 'dropdown',
  CHECKBOXES = 'checkboxes',
  DATE = 'date',
  RANGE_DATE = 'range-date',
  RANGE_DATE_TIME = 'range-date-time',
}

export enum DataType {
  TEXT = 'text',
  PASSWORD = 'password',
  LIST = 'list',
}

export interface DataOption {
  label: string;
  name: string;
}

export interface FieldConfig {
  name: string;
  label: string;
  type: FieldType;
  dataType?: DataType;
  value?: any;
  placeholder?: string;
  required?: boolean;
  errorMessage?: string;
  options?: string[];
  cssClass?: string;
  maxWidth?: string;
  minWidth?: string;
  labelTop?: boolean;
}

export class FormField {
  name!: string;

  type!: FieldType;
  dataType?: DataType;

  value?: any;
  options?: string[];

  required?: boolean;

  label?: string;
  placeholder?: string;

  labelTop?: boolean;

  minLength?: number;
  maxLength?: number;

  errorMessage?: string = 'This field is required'; // default error msg

  formControl!: AbstractControl;

  // css options
  cssClass?: string;
  minWidth?: string;
  maxWidth?: string;

  constructor(config: Partial<FieldConfig>) {
    Object.assign(this, {
      ...config,
    });

    const { value } = this;

    this.formControl = new FormControl(value ? value : null, this.getValidators());
  }

  private getValidators(): ValidatorFn[] {
    const validators: ValidatorFn[] = [];

    if (this.required) {
      validators.push(Validators.required);
    }

    switch (this.type) {
      case FieldType.TEXT: {
        break;
      }
      case FieldType.TEXTAREA: {
        break;
      }
      case FieldType.NUMBER: {
        if (this.minLength) {
          validators.push(Validators.min(this.minLength));
        }
        if (this.maxLength) {
          validators.push(Validators.max(this.maxLength));
        }
        break;
      }
      default: {
      }
    }

    return validators;
  }
}
