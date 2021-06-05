import GenericField from 'src/app/shared/fields/generic-field';
import * as yup from 'yup';
import { FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/form/validations/custom-validators';

export default class IntegerField extends GenericField {
  public hint;
  public placeholder;
  public required;
  public min;
  public max;

  constructor(
    name,
    label,
    {
      hint = undefined,
      placeholder = undefined,
      required = false,
      min = undefined,
      max = undefined,
    } = {},
  ) {
    super(name, label);

    this.hint = hint;
    this.placeholder = placeholder;
    this.required = required;
    this.min = min;
    this.max = max;
  }

  forPresenter(value) {
    return value;
  }

  forFilterCast() {
    return yup.number().integer().label(this.label);
  }

  forFilterControl(value) {
    const validators = [CustomValidators.number()];

    return new FormControl(
      value || value === 0 ? Number(value) : null,
      validators,
    );
  }

  forFormControl(value) {
    const validators = [CustomValidators.integer()];

    if (this.required) {
      validators.push(Validators.required);
    }

    if (this.min || this.min === 0) {
      validators.push(Validators.min(this.min));
    }

    if (this.max) {
      validators.push(Validators.max(this.max));
    }

    return new FormControl(
      value || value === 0 ? Number(value) : null,
      validators,
    );
  }

  forFormCast() {
    let yupChain = yup
      .number()
      .nullable(true)
      .label(this.label);

    return yupChain;
  }

  forExport() {
    return yup.mixed().label(this.label);
  }

  forImport() {
    let yupChain = yup
      .number()
      .integer()
      .nullable(true)
      .label(this.label);

    if (this.required) {
      yupChain = yupChain.required();
    }

    if (this.min || this.min === 0) {
      yupChain = yupChain.min(this.min);
    }

    if (this.max) {
      yupChain = yupChain.max(this.max);
    }

    return yupChain;
  }

  forFilterPreview(value) {
    if (!value || !value.length) {
      return null;
    }

    const start = value[0];
    const end = value.length === 2 && value[1];

    if (
      (start == null || start === '') &&
      (end == null || end === '')
    ) {
      return null;
    }

    if (start != null && (end == null || end === '')) {
      return `> ${start}`;
    }

    if ((start == null || start === '') && end != null) {
      return `< ${end}`;
    }

    return `${start} - ${end}`;
  }
}
