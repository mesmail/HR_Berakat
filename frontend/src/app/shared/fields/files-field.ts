import GenericField from 'src/app/shared/fields/generic-field';
import * as yup from 'yup';
import { FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/form/validations/custom-validators';

export default class FilesField extends GenericField {
  public hint;
  public placeholder;
  public storage;
  public required;
  public min;
  public max;
  public formats;

  constructor(
    name,
    label,
    storage,
    {
      hint = undefined,
      placeholder = undefined,
      required = false,
      min = undefined,
      max = undefined,
      formats = undefined,
    } = {},
  ) {
    super(name, label);

    this.hint = hint;
    this.placeholder = placeholder;
    this.storage = storage;
    this.required = required;
    this.min = min;
    this.max = max;
    this.formats = formats;
  }

  forPresenter(value) {
    return value || [];
  }

  forFormControl(value) {
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

    return new FormControl(value || [], validators);
  }

  forFormCast() {
    let yupChain = yup
      .array()
      .nullable(true)
      .label(this.label);

    return yupChain;
  }

  forExport() {
    return yup
      .mixed()
      .label(this.label)
      .transform((value, originalValue) => {
        if (!originalValue || !originalValue.length) {
          return null;
        }

        return originalValue
          .map((value) => value.downloadUrl)
          .join(' ');
      });
  }

  forImport() {
    let yupChain = yup
      .array()
      .compact()
      .ensure()
      .label(this.label)
      .nullable(true)
      .transform((value, originalValue) => {
        if (!originalValue) {
          return null;
        }

        if (Array.isArray(originalValue)) {
          return originalValue;
        }

        return originalValue
          .trim()
          .split(' ')
          .map((value) => {
            return {
              name: value.trim(),
              publicUrl: value.trim(),
              new: true,
            };
          });
      });

    if (this.required || this.min) {
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
}
