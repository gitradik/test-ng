import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MockDataService } from '@app/core/services/mock-data.service';
import {
  DataType,
  FieldType,
  FormField,
} from '@app/shared/components/form-fields/form-field.class';
import { FormFieldsService } from '@app/shared/components/form-fields/form-fields.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formFields: FormField[] = [
    new FormField({
      name: 'role',
      label: 'Role',
      type: FieldType.DROPDOWN,
      options: ['User', 'Customer admin', 'Güdel admin'],
      value: 'User',
      required: true,
      labelTop: true,
    }),
    new FormField({
      name: 'password',
      label: 'Password',
      type: FieldType.TEXT,
      dataType: DataType.PASSWORD,
      required: true,
      labelTop: true,
    }),
  ];

  formGroup!: FormGroup;

  constructor(
    private readonly formFieldsService: FormFieldsService,
    private readonly mock: MockDataService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formFieldsService.getFormGroup(this.formFields);
  }

  submit(): void {
    // temp mock login
    if (/g[u|ü|ue]del/.test(this.formGroup.value.password)) {
      this.mock.isMockLogin = true;
      setTimeout(() => this.router.navigate(['home']), 100);
    }
  }
}
