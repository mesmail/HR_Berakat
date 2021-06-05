import GenericField from 'src/app/shared/fields/generic-field';
import * as yup from 'yup';
import { Validators, FormControl } from '@angular/forms';

export default class StringField extends GenericField {
  public hint;
  public placeholder;
  public required;
  public matches;
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
      matches = undefined,
    } = {},
  ) {
    super(name, label);

    this.hint = hint;
    this.placeholder = placeholder;
    this.required = required;
    this.matches = matches;
    this.min = min;
    this.max = max;
  }

  forPresenter(value) {
    return value;
  }

  forFormControl(value) {
    const validators = [];

    if (this.required) {
      validators.push(Validators.required);
    }

    if (this.min || this.min === 0) {
      validators.push(Validators.minLength(this.min));
    }

    if (this.max || this.max === 0) {
      validators.push(Validators.maxLength(this.max));
    }

    if (this.matches) {
      validators.push(Validators.pattern(this.matches));
    }

    return new FormControl(value, validators);
  }

  forFormCast() {
    let yupChain = yup
      .string()
      .nullable(true)
      .trim()
      .label(this.label);

    return yupChain;
  }

  forFilterControl(value) {
    return new FormControl(value);
  }

  forFilterCast() {
    let yupChain = yup
      .string()
      .nullable(true)
      .trim()
      .label(this.label);

    return yupChain;
  }

  forExport() {
    return yup.mixed().label(this.label);
  }

  forImport() {
    let yupChain = yup
      .string()
      .nullable(true)
      .trim()
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

    if (this.matches) {
      yupChain = yupChain.matches(/^[0-9]/);
    }

    return yupChain;
  }

  forFilterPreview(value) {
    return value;
  }
}
