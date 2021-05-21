import GenericField from 'src/app/shared/fields/generic-field';
import * as yup from 'yup';
import { FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/form/validations/custom-validators';

export default class StringArrayField extends GenericField {
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

  forFormControl(value) {
    function transformValue(arg) {
      if (!arg) {
        return arg;
      }

      if (Array.isArray(arg)) {
        return arg;
      }

      return [arg];
    }

    const validators = [];

    if (this.required) {
      validators.push(Validators.required);
    }

    if (this.min || this.min === 0) {
      validators.push(
        CustomValidators.minArrayLength(this.min),
      );
    }

    if (this.max || this.max === 0) {
      validators.push(
        CustomValidators.maxArrayLength(this.max),
      );
    }

    return new FormControl(
      transformValue(value) || [],
      validators,
    );
  }

  forFormCast() {
    let yupChain = yup
      .array()
      .compact()
      .ensure()
      .of(yup.string().trim())
      .label(this.label);

    if (this.required) {
      yupChain = yupChain.required();
    }

    if (this.min || this.min === 0) {
      yupChain = yupChain.min(this.min);
    } else if (this.required) {
      yupChain = yupChain.min(1);
    }

    if (this.max) {
      yupChain = yupChain.max(this.max);
    }

    return yupChain;
  }

  forFilterControl(value) {
    function transformValue(arg) {
      if (!arg) {
        return arg;
      }

      if (Array.isArray(arg)) {
        return arg;
      }

      return [arg];
    }

    return new FormControl(transformValue(value) || []);
  }

  forFilterCast() {
    let yupChain = yup
      .array()
      .compact()
      .ensure()
      .of(yup.string().trim())
      .label(this.label);

    return yupChain;
  }

  forFilter() {
    let yupChain = yup
      .array()
      .compact()
      .ensure()
      .of(yup.string().trim())
      .label(this.label)
      .transform((value, originalValue) => {
        if (!originalValue) {
          return originalValue;
        }

        if (Array.isArray(originalValue)) {
          return originalValue;
        }

        return [originalValue];
      });

    return yupChain;
  }

  forImport() {
    let yupChain = yup
      .mixed()
      .label(this.label)
      .transform((value) =>
        Array.isArray(value)
          ? value
          : (value || '')
              .trim()
              .split(' ')
              .filter((item) => Boolean(item))
              .map((item) => item.trim()),
      );

    if (this.required) {
      yupChain = yupChain.required();
    }

    return yupChain;
  }

  forExport() {
    let yupChain = yup.mixed().label(this.label);
    return yupChain;
  }

  forFilterPreview(value) {
    return (value || []).join(' ');
  }
}
