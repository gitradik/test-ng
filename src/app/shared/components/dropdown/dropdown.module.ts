import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownComponent } from '@shared/components/dropdown/dropdown.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, NgbDropdownModule, FormsModule],
  declarations: [DropdownComponent],
  exports: [DropdownComponent],
})
export class DropdownModule {}
