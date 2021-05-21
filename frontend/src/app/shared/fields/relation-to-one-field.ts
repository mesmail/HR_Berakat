import GenericField from 'src/app/shared/fields/generic-field';
import * as yup from 'yup';
import { FormControl } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/form/validations/custom-validators';

export default class RelationToOneField extends GenericField {
  public hint;
  public placeholder;
  public required;
  public fetchFn;
  public mapperFn;
  public viewUrl;
  public readPermission;

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
    } = {},
  ) {
    super(name, label);

    this.hint = hint;
    this.placeholder = placeholder;
    this.required = required;
    this.fetchFn = fetchFn;
    this.mapperFn = mapperFn;
    this.viewUrl = viewUrl;
    this.readPermission = readPermission;
  }

  forPresenter(value) {
    return this.mapperFn(value);
  }

  forFormControl(value) {
    const mappedValue = value ? this.mapperFn(value) : null;
    const validations = [];

    if (this.required) {
      validations.push(
        CustomValidators.autocompleteRequired(),
      );
    }

    return new FormControl(mappedValue, validations);
  }

  forFormCast() {
    let yupChain = yup
      .mixed()
      .nullable(true)
      .label(this.label)
      .transform((value, originalValue) => {
        if (!originalValue) {
          return null;
        }

        return originalValue.id;
      });

    return yupChain;
  }

  forFilterControl(value) {
    const mappedValue = value ? this.mapperFn(value) : null;
    return new FormControl(mappedValue);
  }

  forFilterCast() {
    return yup
      .mixed()
      .label(this.label)
      .transform((value, originalValue) => {
        if (!originalValue) {
          return null;
        }

        return originalValue.id;
      });
  }

  forExport() {
    return yup
      .mixed()
      .label(this.label)
      .transform((value, originalValue) => {
        if (!originalValue || !originalValue.id) {
          return null;
        }

        return originalValue.id;
      });
  }

  forImport() {
    let yupChain = yup
      .mixed()
      .nullable(true)
      .label(this.label);

    if (this.required) {
      yupChain = yupChain.required();
    }

    return yupChain;
  }

  forFilterPreview(value) {
    return (value && value.label) || null;
  }
}
