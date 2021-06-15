import { GenericModel } from 'src/app/shared/model/generic-model';
import { i18n } from 'src/i18n';
import DateTimeField from 'src/app/shared/fields/date-time-field';
import IdField from 'src/app/shared/fields/id-field';
import DateTimeRangeField from 'src/app/shared/fields/date-time-range-field';
import IntegerField from 'src/app/shared/fields/integer-field';
import IntegerRangeField from 'src/app/shared/fields/integer-range-field';
import StringField from 'src/app/shared/fields/string-field';
import DateField from 'src/app/shared/fields/date-field';
import DateRangeField from 'src/app/shared/fields/date-range-field';

function label(name) {
  return i18n(`entities.employmentContract.fields.${name}`);
}

function placeholder(name) {
  return i18n(`entities.employmentContract.placeholders.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  contractDate: new DateField('contractDate', label('contractDate'), {
    "required": true
  }),
  companyRepresentative: new StringField('companyRepresentative', label('companyRepresentative'), {
    "placeholder": placeholder('companyRepresentative'),
    "required": true
  }),
  secondParty: new StringField('secondParty', label('secondParty'), {
    "placeholder": placeholder('secondParty'),
    "required": true
  }),
  nationality: new StringField('nationality', label('nationality'), {
    "placeholder": placeholder('nationality'),
    "required": true
  }),
  passportNumber: new StringField('passportNumber', label('passportNumber'), {
    "placeholder": placeholder('passportNumber'),
    "required": true
  }),
  passportIssueDate: new DateField('passportIssueDate', label('passportIssueDate'), {
    "required": true
  }),
  email: new StringField('email', label('email'), {
    "placeholder": placeholder('email'),
    "required": true
  }),
  jobTitle: new StringField('jobTitle', label('jobTitle'), {
    "placeholder": placeholder('jobTitle'),
    "required": true
  }),
  dailyWorkingHours: new IntegerField('dailyWorkingHours', label('dailyWorkingHours'), {
    "placeholder": placeholder('dailyWorkingHours'),
    "required": true
  }),
  weeklyWorkingHours: new IntegerField('weeklyWorkingHours', label('weeklyWorkingHours'), {
    "placeholder": placeholder('weeklyWorkingHours'),
    "required": true
  }),
  weekEndDay: new StringField('weekEndDay', label('weekEndDay'), {
    "placeholder": placeholder('weekEndDay'),
    "required": true
  }),
  workStartDate: new DateField('workStartDate', label('workStartDate'), {
    "required": true
  }),
  employeeName: new StringField('employeeName', label('employeeName'), {
    "placeholder": placeholder('employeeName'),
    "required": true
  }),
  positionName: new StringField('positionName', label('positionName'), {
    "placeholder": placeholder('positionName'),
    "required": true
  }),
  basicSalary: new IntegerField('basicSalary', label('basicSalary'), {
    "placeholder": placeholder('basicSalary'),
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
  contractDateRange: new DateRangeField(
    'contractDateRange',
    label('contractDateRange'),
  ),
  passportIssueDateRange: new DateRangeField(
    'passportIssueDateRange',
    label('passportIssueDateRange'),
  ),
  dailyWorkingHoursRange: new IntegerRangeField(
    'dailyWorkingHoursRange',
    label('dailyWorkingHoursRange'),
  ),
  weeklyWorkingHoursRange: new IntegerRangeField(
    'weeklyWorkingHoursRange',
    label('weeklyWorkingHoursRange'),
  ),
  workStartDateRange: new DateRangeField(
    'workStartDateRange',
    label('workStartDateRange'),
  ),
  basicSalaryRange: new IntegerRangeField(
    'basicSalaryRange',
    label('basicSalaryRange'),
  ),
};

export class EmploymentContractModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
