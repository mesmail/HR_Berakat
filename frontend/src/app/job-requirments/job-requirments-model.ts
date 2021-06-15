import { GenericModel } from 'src/app/shared/model/generic-model';
import { i18n } from 'src/i18n';
import DateTimeField from 'src/app/shared/fields/date-time-field';
import IdField from 'src/app/shared/fields/id-field';
import DateTimeRangeField from 'src/app/shared/fields/date-time-range-field';
import IntegerField from 'src/app/shared/fields/integer-field';
import IntegerRangeField from 'src/app/shared/fields/integer-range-field';
import StringField from 'src/app/shared/fields/string-field';

function label(name) {
  return i18n(`entities.jobRequirments.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  tactLevel: new StringField('tactLevel', label('tactLevel'), {}),
  experienceYears: new IntegerField('experienceYears', label('experienceYears'), {}),
  minKPI: new StringField('minKPI', label('minKPI'), {}),
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
  experienceYearsRange: new IntegerRangeField(
    'experienceYearsRange',
    label('experienceYearsRange'),
  ),
};

export class JobRequirmentsModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
