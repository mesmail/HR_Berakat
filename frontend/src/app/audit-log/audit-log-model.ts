import DateTimeField from 'src/app/shared/fields/date-time-field';
import DateTimeRangeField from 'src/app/shared/fields/date-time-range-field';
import IdField from 'src/app/shared/fields/id-field';
import JsonField from 'src/app/shared/fields/json-field';
import StringField from 'src/app/shared/fields/string-field';
import { i18n } from 'src/i18n';
import StringArrayField from 'src/app/shared/fields/string-array-field';
import { GenericModel } from 'src/app/shared/model/generic-model';

function label(name) {
  return i18n(`auditLog.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  timestampRange: new DateTimeRangeField(
    'timestampRange',
    label('timestampRange'),
  ),
  timestamp: new DateTimeField(
    'timestamp',
    label('timestamp'),
  ),
  createdByEmail: new StringField(
    'createdByEmail',
    label('createdByEmail'),
  ),
  entityName: new StringField(
    'entityName',
    label('entityName'),
  ),
  entityNames: new StringArrayField(
    'entityNames',
    label('entityNames'),
  ),
  action: new StringField('action', label('action')),
  entityId: new StringField('entityId', label('entityId')),
  values: new JsonField('values', label('values')),
};

export class AuditLogModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
