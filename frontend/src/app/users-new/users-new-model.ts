import { GenericModel } from 'src/app/shared/model/generic-model';
import { i18n } from 'src/i18n';
import DateTimeField from 'src/app/shared/fields/date-time-field';
import IdField from 'src/app/shared/fields/id-field';
import DateTimeRangeField from 'src/app/shared/fields/date-time-range-field';
import StringField from 'src/app/shared/fields/string-field';
import EnumeratorMultipleField from 'src/app/shared/fields/enumerator-multiple-field';

function label(name) {
  return i18n(`entities.usersNew.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.usersNew.enumerators.${name}.${value}`);
}

function placeholder(name) {
  return i18n(`entities.usersNew.placeholders.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  email: new StringField('email', label('email'), {
    "placeholder": placeholder('email'),
    "required": true,
    "min": 8,
    "max": 255
  }),
  firsrtName: new StringField('firsrtName', label('firsrtName'), {
    "placeholder": placeholder('firsrtName'),
    "required": true,
    "min": 3,
    "max": 255
  }),
  secondName: new StringField('secondName', label('secondName'), {
    "placeholder": placeholder('secondName')
  }),
  phoneNumber: new StringField('phoneNumber', label('phoneNumber'), {
    "placeholder": placeholder('phoneNumber'),
    "required": true,
    "min": 9,
    "max": 11
  }),
  roles: new EnumeratorMultipleField('roles', label('roles'), [
    { id: 'مدراء الاقسام', label: enumeratorLabel('roles', 'مدراء الاقسام') },
    { id: 'العملاء', label: enumeratorLabel('roles', 'العملاء') },
    { id: 'الموظفين', label: enumeratorLabel('roles', 'الموظفين') },
    { id: 'مدير الموقع', label: enumeratorLabel('roles', 'مدير الموقع') },
  ],{
    "placeholder": placeholder('roles')
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

export class UsersNewModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
