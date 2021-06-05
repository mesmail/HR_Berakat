import GenericField from 'src/app/shared/fields/generic-field';
import * as yup from 'yup';
import { FormControl } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/form/validations/custom-validators';

export default class IntegerRangeField extends GenericField {
  forFilterCast() {
    return yup.mixed().label(this.label);
  }

  forFilterControl(value) {
    return new FormControl(
      value,
      CustomValidators.integerRange(),
    );
  }

  forFilterPreview(value) {
    if (!value || !value.length) {
      return null;
    }

    const start = value[0];
    const end = value.length === 2 && value[1];

    if (
      (start == null || start === '') &&
      (end == null || end === '')
    ) {
      return null;
    }

    if (start != null && (end == null || end === '')) {
      return `> ${start}`;
    }

    if ((start == null || start === '') && end != null) {
      return `< ${end}`;
    }

    return `${start} - ${end}`;
  }
}
