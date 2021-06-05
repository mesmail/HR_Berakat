import GenericField from 'src/app/shared/fields/generic-field';
import * as yup from 'yup';
import { i18n } from 'src/i18n';
import { FormControl } from '@angular/forms';

export default class BooleanField extends GenericField {
  public hint;
  public placeholder;
  public yesLabel;
  public noLabel;

  constructor(
    name,
    label,
    {
      hint = undefined,
      placeholder = undefined,
      yesLabel = undefined,
      noLabel = undefined,
    } = {},
  ) {
    super(name, label);

    this.hint = hint;
    this.placeholder = placeholder;
    this.yesLabel = yesLabel || i18n('common.yes');
    this.noLabel = noLabel || i18n('common.no');
  }

  forPresenter(value) {
    return value ? this.yesLabel : this.noLabel;
  }

  forFilterPreview(value) {
    return value == null
      ? null
      : Boolean(value)
      ? this.yesLabel
      : this.noLabel;
  }

  forFormControl(value) {
    return new FormControl(value || false);
  }

  forFormCast() {
    let yupChain = yup
      .bool()
      .default(false)
      .label(this.label);
    return yupChain;
  }

  forFilterControl(value) {
    return new FormControl(value);
  }

  forFilterCast() {
    let yupChain = yup
      .bool()
      .nullable(true)
      .label(this.label);
    return yupChain;
  }

  forExport() {
    return yup
      .bool()
      .nullable(true)
      .default(false)
      .label(this.label);
  }

  forImport() {
    let yupChain = yup
      .bool()
      .default(false)
      .label(this.label);
    return yupChain;
  }
}
