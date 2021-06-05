import GenericField from 'src/app/shared/fields/generic-field';
import * as yup from 'yup';
import * as moment from 'moment';
import { FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/form/validations/custom-validators';
import { i18n } from 'src/i18n';

export default class DateTimeField extends GenericField {
  public required: boolean;
  public hint;
  public placeholder;

  constructor(
    name,
    label,
    {
      hint = undefined,
      placeholder = undefined,
      required = false,
    } = {},
  ) {
    super(name, label);

    this.hint = hint;
    this.placeholder = placeholder;
    this.required = required;
  }

  forImportViewTable(value) {
    return value
      ? moment(value).format('YYYY-MM-DD HH:mm')
      : null;
  }

  forPresenter(value) {
    return value
      ? moment(value).format('YYYY-MM-DD HH:mm')
      : null;
  }

  forFormControl(value) {
    const validators = [CustomValidators.datetime()];

    if (this.required) {
      validators.push(Validators.required);
    }

    return new FormControl(
      value ? moment(value).toDate() : null,
      validators,
    );
  }

  forFormCast() {
    let yupChain = yup
      .mixed()
      .nullable(true)
      .transform((value, originalValue) => {
        if (!originalValue) {
          return null;
        }

        return moment(originalValue).toISOString();
      })
      .label(this.label);

    return yupChain;
  }

  forExport() {
    return yup.mixed().label(this.label);
  }

  forImport() {
    let yupChain = yup
      .mixed()
      .nullable(true)
      .label(this.label)
      .test(
        'is-date',
        i18n('validation.mixed.default'),
        (value) => {
          if (!value) {
            return true;
          }

          return value instanceof Date;
        },
      );

    if (this.required) {
      yupChain = yupChain.required();
    }

    return yupChain;
  }

  forFilterPreview(value) {
    return value
      ? moment(value).format('YYYY-MM-DD HH:mm')
      : null;
  }
}
