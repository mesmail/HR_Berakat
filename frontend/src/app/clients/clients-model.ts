import { GenericModel } from 'src/app/shared/model/generic-model';
import { i18n } from 'src/i18n';
import DateTimeField from 'src/app/shared/fields/date-time-field';
import IdField from 'src/app/shared/fields/id-field';
import DateTimeRangeField from 'src/app/shared/fields/date-time-range-field';
import IntegerField from 'src/app/shared/fields/integer-field';
import IntegerRangeField from 'src/app/shared/fields/integer-range-field';
import StringField from 'src/app/shared/fields/string-field';

function label(name) {
  return i18n(`entities.clients.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  clientName: new StringField('clientName', label('clientName'), {
    "required": true,
    "max": 100
  }),
  jobCount: new IntegerField('jobCount', label('jobCount'), {}),
  clientIndustry: new StringField('clientIndustry', label('clientIndustry'), {}),
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
  jobCountRange: new IntegerRangeField(
    'jobCountRange',
    label('jobCountRange'),
  ),
};

export class ClientsModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
