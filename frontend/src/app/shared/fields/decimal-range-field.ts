import GenericField from 'src/app/shared/fields/generic-field';
import * as yup from 'yup';
import { FormControl } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/form/validations/custom-validators';

export default class DecimalRangeField extends GenericField {
  forFilterCast() {
    return yup
      .mixed()
      .label(this.label)
      .transform((value, originalValue) => {
        if (originalValue) {
          return originalValue.map((partialValue) =>
            partialValue && partialValue !== 0
              ? Number(partialValue)
              : null,
          );
        }
      });
  }

  forFilterControl(value) {
    return new FormControl(
      value,
      CustomValidators.numberRange(),
    );
  }

  forFilterPreview(value) {
    if (!value || !value.length) {
      return null;
    }

    const start = value[0];
    const end = value.length === 2 && value[1];

    if (start == null && end == null) {
      return null;
    }

    if (start != null && end == null) {
      return `> ${formatDecimal(start)}`;
    }

    if (start == null && end != null) {
      return `< ${formatDecimal(end)}`;
    }

    return `${formatDecimal(start)} - ${formatDecimal(
      end,
    )}`;

    function formatDecimal(value) {
      return value
        ? this.scale
          ? Number(value).toFixed(this.scale)
          : Number(value)
        : null;
    }
  }
}
