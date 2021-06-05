import * as yup from 'yup';
import { isString } from 'lodash';
import { FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/form/validations/custom-validators';
import GenericField from 'src/app/shared/fields/generic-field';

export default class EnumeratorMultipleField extends GenericField {
  public hint;
  public placeholder;
  public options: Array<any>;
  public required: boolean;
  public min: number | undefined;
  public max: number | undefined;

  constructor(
    name,
    label,
    options,
    config: {
      hint?;
      placeholder?;
      required?;
      min?;
      max?;
    } = {},
  ) {
    super(name, label);

    this.hint = config.hint;
    this.placeholder = config.placeholder;
    this.options = options || [];
    this.min = config.min;
    this.max = config.max;
    this.required = config.required;
  }

  _id(option) {
    if (!option) {
      return option;
    }

    if (isString(option)) {
      return option;
    }

    return option.id;
  }

  _label(option) {
    if (!option) {
      return option;
    }

    if (isString(option)) {
      return option;
    }

    return option.label;
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

  forPresenter(values) {
    return (values || []).map((value) => {
      const option = this.options.find(
        (option) => option.id === this._id(value),
      );

      if (option) {
        return this._label(option);
      }

      return value;
    });
  }

  forFilterPreview(values) {
    return (values || [])
      .map((value) => {
        const option = this.options.find(
          (option) => option.id === this._id(value),
        );

        if (option) {
          return this._label(option);
        }

        return value;
      })
      .join(', ');
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
      .nullable(true)
      .compact()
      .ensure()
      .of(yup.string().trim())
      .label(this.label);

    return yupChain;
  }

  forFormCast() {
    let yupChain = yup
      .array()
      .nullable(true)
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

  forExport() {
    let yupChain = yup.mixed().label(this.label);
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
}
