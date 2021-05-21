import GenericField from 'src/app/shared/fields/generic-field';
import { isString } from 'lodash';
import * as yup from 'yup';
import { i18n } from 'src/i18n';
import { FormControl, Validators } from '@angular/forms';

export default class EnumeratorField extends GenericField {
  public hint;
  public placeholder;
  public options: any[];
  public required: boolean;

  constructor(
    name,
    label,
    options,
    {
      hint = undefined,
      placeholder = undefined,
      required = false,
    } = {},
  ) {
    super(name, label);
    this.hint = hint;
    this.placeholder = placeholder;
    this.options = options || [];
    this.required = required;
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

  forPresenter(value) {
    const option = this.options.find(
      (option) => option.id === this._id(value),
    );

    if (option) {
      return this._label(option);
    }

    return value;
  }

  forFormControl(value) {
    const validators = [];

    if (this.required) {
      validators.push(Validators.required);
    }

    return new FormControl(this._id(value), validators);
  }

  forFilterControl(value) {
    return new FormControl(this._id(value));
  }

  forFilterCast() {
    return yup.string().nullable(true).label(this.label);
  }

  forFormCast() {
    let yupChain = yup
      .string()
      .nullable(true)
      .label(this.label);

    return yupChain;
  }

  forExport() {
    return yup.mixed().label(this.label);
  }

  forImport() {
    let yupChain = yup
      .string()
      .label(this.label)
      .nullable(true)
      .oneOf([
        null,
        ...this.options.map((option) => this._id(option)),
      ]);

    if (this.required) {
      yupChain = yupChain.required(
        i18n('validation.string.selected'),
      );
    }

    return yupChain;
  }

  forFilterPreview(value) {
    const option = this.options.find(
      (option) => option.id === this._id(value),
    );

    if (option) {
      return this._label(option);
    }

    return value;
  }
}
