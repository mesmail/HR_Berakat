import { FormControl } from '@angular/forms';
import GenericField from 'src/app/shared/fields/generic-field';
import * as yup from 'yup';
import * as moment from 'moment';
export default class DateRangeField extends GenericField {
  forFilterControl(value) {
    return new FormControl(value);
  }

  forFilterCast() {
    return yup.mixed().label(this.label);
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
      return `> ${formatDate(start)}`;
    }

    if (!start && end) {
      return `< ${formatDate(end)}`;
    }

    return `${formatDate(start)} - ${formatDate(end)}`;

    function formatDate(value) {
      return value
        ? moment(value).format('YYYY-MM-DD')
        : null;
    }
  }
}
