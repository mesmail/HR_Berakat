import GenericField from 'src/app/shared/fields/generic-field';
import * as yup from 'yup';
import { FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/form/validations/custom-validators';

export default class RelationToManyField extends GenericField {
  public required;
  public min;
  public max;
  public fetchFn;
  public mapperFn;
  public viewUrl;
  public readPermission;
  public hint;
  public placeholder;

  constructor(
    name,
    label,
    viewUrl,
    readPermission,
    fetchFn,
    mapperFn,
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

    if (required && (!min || min < 1)) {
      this.min = 1;
    }

    this.fetchFn = fetchFn;
    this.mapperFn = mapperFn;
    this.viewUrl = viewUrl;
    this.readPermission = readPermission;
  }

  forPresenter(value) {
    if (!value) {
      return [];
    }

    return value.map((item) => this.mapperFn(item));
  }

  forFormControl(value) {
    const mappedValue = value
      ? value.map((item) => this.mapperFn(item))
      : [];

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

    return new FormControl(mappedValue, validators);
  }

  forFormCast() {
    let yupChain = yup
      .array()
      .nullable(true)
      .label(this.label)
      .transform((value, originalValue) => {
        if (!originalValue || !originalValue.length) {
          return [];
        }

        return originalValue.map((item) => item.id);
      });

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

  forExport() {
    return yup
      .mixed()
      .label(this.label)
      .transform((value, originalValue) => {
        if (!originalValue || !originalValue.length) {
          return null;
        }

        return originalValue
          .map((value) => value.id)
          .join(' ');
      });
  }

  forImport() {
    let yupChain = yup
      .array()
      .nullable(true)
      .label(this.label)
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
            return value;
          });
      });

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
}
