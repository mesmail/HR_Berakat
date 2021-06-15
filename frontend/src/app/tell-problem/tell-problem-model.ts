import { GenericModel } from 'src/app/shared/model/generic-model';
import { i18n } from 'src/i18n';
import DateTimeField from 'src/app/shared/fields/date-time-field';
import IdField from 'src/app/shared/fields/id-field';
import DateTimeRangeField from 'src/app/shared/fields/date-time-range-field';
import StringField from 'src/app/shared/fields/string-field';

function label(name) {
  return i18n(`entities.tellProblem.fields.${name}`);
}

function placeholder(name) {
  return i18n(`entities.tellProblem.placeholders.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  problemDescription: new StringField('problemDescription', label('problemDescription'), {
    "placeholder": placeholder('problemDescription')
  }),
  problemDate: new DateTimeField('problemDate', label('problemDate'), {}),
  problemCauses: new StringField('problemCauses', label('problemCauses'), {
    "placeholder": placeholder('problemCauses')
  }),
  problemSolutions: new StringField('problemSolutions', label('problemSolutions'), {
    "placeholder": placeholder('problemSolutions')
  }),
  createdAt: new DateTimeField(
    'createdAt',
    label('createdAt'),
  ),
  updatedAt: new DateTimeField(
    'updatedAt',
    label('updatedAt'),
  ),
  createdAtRange: new DateTimeRangeField(
    'createdAtRange',
    label('createdAtRange'),
  ),
  problemDateRange: new DateTimeRangeField(
    'problemDateRange',
    label('problemDateRange'),
  ),
};

export class TellProblemModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
