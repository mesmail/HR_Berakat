import { GenericModel } from 'src/app/shared/model/generic-model';
import { i18n } from 'src/i18n';
import DateTimeField from 'src/app/shared/fields/date-time-field';
import IdField from 'src/app/shared/fields/id-field';
import DateTimeRangeField from 'src/app/shared/fields/date-time-range-field';
import IntegerField from 'src/app/shared/fields/integer-field';
import IntegerRangeField from 'src/app/shared/fields/integer-range-field';
import StringField from 'src/app/shared/fields/string-field';
import DecimalRangeField from 'src/app/shared/fields/decimal-range-field';
import DecimalField from 'src/app/shared/fields/decimal-field';
import DateField from 'src/app/shared/fields/date-field';
import DateRangeField from 'src/app/shared/fields/date-range-field';

function label(name) {
  return i18n(`entities.employmentContract.fields.${name}`);
}

function placeholder(name) {
  return i18n(`entities.employmentContract.placeholders.${name}`);
}

function hint(name) {
  return i18n(`entities.employmentContract.hints.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  employeeName: new StringField('employeeName', label('employeeName'), {
    "placeholder": placeholder('employeeName'),
    "required": true
  }),
  workingPeriod: new IntegerField('workingPeriod', label('workingPeriod'), {
    "placeholder": placeholder('workingPeriod'),
    "required": true
  }),
  employmentSalary: new DecimalField('employmentSalary', label('employmentSalary'), {
    "placeholder": placeholder('employmentSalary'),
    "required": true
  }),
  jobRoles: new StringField('jobRoles', label('jobRoles'), {
    "placeholder": placeholder('jobRoles'),
    "required": true
  }),
  employeeContactEmail: new StringField('employeeContactEmail', label('employeeContactEmail'), {
    "placeholder": placeholder('employeeContactEmail'),
    "required": true
  }),
  mobileNumber: new IntegerField('mobileNumber', label('mobileNumber'), {
    "placeholder": placeholder('mobileNumber'),
    "required": true
  }),
  homeAddress: new StringField('homeAddress', label('homeAddress'), {
    "placeholder": placeholder('homeAddress'),
    "required": true
  }),
  contractPeriod: new IntegerField('contractPeriod', label('contractPeriod'), {
    "placeholder": placeholder('contractPeriod'),
    "hint": hint('contractPeriod'),
    "required": true
  }),
  startDate: new DateField('startDate', label('startDate'), {
    "required": true
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
  workingPeriodRange: new IntegerRangeField(
    'workingPeriodRange',
    label('workingPeriodRange'),
  ),
  employmentSalaryRange: new DecimalRangeField(
    'employmentSalaryRange',
    label('employmentSalaryRange'),
  ),
  mobileNumberRange: new IntegerRangeField(
    'mobileNumberRange',
    label('mobileNumberRange'),
  ),
  contractPeriodRange: new IntegerRangeField(
    'contractPeriodRange',
    label('contractPeriodRange'),
  ),
  startDateRange: new DateRangeField(
    'startDateRange',
    label('startDateRange'),
  ),
};

export class EmploymentContractModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
