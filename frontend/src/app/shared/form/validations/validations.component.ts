import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationMessages } from 'src/app/shared/form/validations/validation-messages';

@Component({
  selector: 'app-validations',
  templateUrl: './validations.component.html',
})
export class ValidationsComponent {
  @Input() ngForm: any;
  @Input() control: FormControl;
  @Input() label: string;

  get invalid() {
    return Boolean(this.errorMessage);
  }

  get errorMessage() {
    const errors = this.control.errors;
    for (const propertyName in errors) {
      if (
        errors.hasOwnProperty(propertyName) &&
        (!this.ngForm ||
          this.control.touched ||
          this.control.dirty ||
          this.ngForm.submitted)
      ) {
        return ValidationMessages.get(
          propertyName,
          this.label,
          errors[propertyName],
        );
      }
    }
    return null;
  }
}
