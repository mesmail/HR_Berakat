import { GenericModel } from 'src/app/shared/model/generic-model';
import { i18n } from 'src/i18n';
import DateTimeField from 'src/app/shared/fields/date-time-field';
import IdField from 'src/app/shared/fields/id-field';
import DateTimeRangeField from 'src/app/shared/fields/date-time-range-field';
import StringField from 'src/app/shared/fields/string-field';

function label(name) {
  return i18n(`entities.claim.fields.${name}`);
}

function placeholder(name) {
  return i18n(`entities.claim.placeholders.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  problemDescription: new StringField('problemDescription', label('problemDescription'), {
    "placeholder": placeholder('problemDescription')
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

};

export class ClaimModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
