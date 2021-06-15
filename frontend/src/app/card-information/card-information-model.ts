import { GenericModel } from 'src/app/shared/model/generic-model';
import { i18n } from 'src/i18n';
import DateTimeField from 'src/app/shared/fields/date-time-field';
import IdField from 'src/app/shared/fields/id-field';
import DateTimeRangeField from 'src/app/shared/fields/date-time-range-field';
import StringField from 'src/app/shared/fields/string-field';

function label(name) {
  return i18n(`entities.cardInformation.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  version: new StringField('version', label('version'), {
    "required": true
  }),
  date: new DateTimeField('date', label('date'), {}),
  generalManager: new StringField('generalManager', label('generalManager'), {}),
  hRManager: new StringField('hRManager', label('hRManager'), {}),
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
  dateRange: new DateTimeRangeField(
    'dateRange',
    label('dateRange'),
  ),
};

export class CardInformationModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
