import GenericField from 'src/app/shared/fields/generic-field';
import * as yup from 'yup';
import { CustomValidators } from 'src/app/shared/form/validations/custom-validators';
import { Validators, FormControl } from '@angular/forms';

export default class DecimalField extends GenericField {
  public required: boolean;
  public min: number;
  public max: number;
  public scale: number;
  public hint;
  public placeholder;

  constructor(
    name,
    label,
    {
      hint = undefined,
      placeholder = undefined,
      required = false,
      min = undefined,
      max = undefined,
      scale = undefined,
    } = {},
  ) {
    super(name, label);

    this.hint = hint;
    this.placeholder = placeholder;
    this.required = required;
    this.min = min;
    this.max = max;
    this.scale = scale;
  }

  forPresenter(value) {
    if (!value) {
      return value;
    }

    if (this.scale === undefined || this.scale === null) {
      return value;
    }

    return Number(value).toFixed(this.scale);
  }

  forFilterCast() {
    return yup.number().label(this.label);
  }

  forFilterControl(value) {
    const validators = [CustomValidators.number()];

    return new FormControl(
      value || value === 0 ? Number(value) : null,
      validators,
    );
  }

  forFormControl(value) {
    const validators = [CustomValidators.number()];

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
    return yup
      .mixed()
      .label(this.label)
      .transform((value) => this.forPresenter(value));
  }

  forImport() {
    let yupChain = yup
      .number()
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
    return value
      ? this.scale
        ? Number(value).toFixed(this.scale)
        : Number(value)
      : null;
  }
}
