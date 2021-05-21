import DateTimeField from 'src/app/shared/fields/date-time-field';
import DateTimeRangeField from 'src/app/shared/fields/date-time-range-field';
import IdField from 'src/app/shared/fields/id-field';
import StringField from 'src/app/shared/fields/string-field';
import { GenericModel } from 'src/app/shared/model/generic-model';
import { i18n } from 'src/i18n';

function label(name) {
  return i18n(`tenant.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  name: new StringField('name', label('name'), {
    required: true,
    max: 50,
  }),
  tenantName: new StringField('name', label('tenantName'), {
    required: true,
    max: 50,
  }),
  url: new StringField('url', label('url'), {
    required: true,
    max: 50,
  }),
  tenantUrl: new StringField('url', label('tenantUrl'), {
    required: true,
    max: 50,
  }),
  plan: new StringField('plan', label('plan')),
  tenantId: new IdField('id', label('tenantId')),
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

export class TenantModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
