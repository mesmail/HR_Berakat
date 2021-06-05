import GenericField from 'src/app/shared/fields/generic-field';
import * as yup from 'yup';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';

export default class DateTimeRangeField extends GenericField {
  forFilterControl(value) {
    return new FormControl(value);
  }

  forFilterCast() {
    return yup
      .mixed()
      .label(this.label)
      .transform((value, originalValues) => {
        if (!originalValues) {
          return null;
        }

        return originalValues.map((originalValue) => {
          if (!originalValue) {
            return null;
          }

          return moment(originalValue).toISOString();
        });
      });
  }

  forFilterPreview(value) {
    if (!value || !value.length) {
      return null;
    }

    const start = value[0];
    const end = value.length === 2 && value[1];

    if (!start && !end) {
      return null;
    }

    if (start && !end) {
      return `> ${formatDatetime(start)}`;
    }

    if (!start && end) {
      return `< ${formatDatetime(end)}`;
    }

    return `${formatDatetime(start)} - ${formatDatetime(
      end,
    )}`;
  }
}

function formatDatetime(value) {
  return value
    ? moment(value).format('YYYY-MM-DD HH:mm')
    : null;
}
