import { GenericModel } from 'src/app/shared/model/generic-model';
import { i18n } from 'src/i18n';
import DateTimeField from 'src/app/shared/fields/date-time-field';
import IdField from 'src/app/shared/fields/id-field';
import DateTimeRangeField from 'src/app/shared/fields/date-time-range-field';
import IntegerField from 'src/app/shared/fields/integer-field';
import IntegerRangeField from 'src/app/shared/fields/integer-range-field';
import StringField from 'src/app/shared/fields/string-field';
import EnumeratorField from 'src/app/shared/fields/enumerator-field';
import DateField from 'src/app/shared/fields/date-field';
import DateRangeField from 'src/app/shared/fields/date-range-field';
import { JobsField } from 'src/app/jobs/jobs-field';
import { DepartmentsField } from 'src/app/departments/departments-field';

function label(name) {
  return i18n(`entities.leaveApplicationForm.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.leaveApplicationForm.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  name: new StringField('name', label('name'), {}),
  position: JobsField.relationToOne('position', label('position'), {}),
  department: DepartmentsField.relationToOne('department', label('department'), {}),
  date: new DateField('date', label('date'), {}),
  contactNo: new StringField('contactNo', label('contactNo'), {}),
  employeeNo: new StringField('employeeNo', label('employeeNo'), {}),
  absenceWork: new IntegerField('absenceWork', label('absenceWork'), {}),
  period: new DateField('period', label('period'), {}),
  specify: new StringField('specify', label('specify'), {}),
  reasons: new EnumeratorField('reasons', label('reasons'), [
    { id: 'الإجازة السنوية', label: enumeratorLabel('reasons', 'الإجازة السنوية') },
    { id: 'الإجازة المرضية', label: enumeratorLabel('reasons', 'الإجازة المرضية') },
    { id: 'إجازة الأمومة', label: enumeratorLabel('reasons', 'إجازة الأمومة') },
    { id: 'إجازة الرأفة', label: enumeratorLabel('reasons', 'إجازة الرأفة') },
    { id: 'إجازة غير مدفوعة الأجر', label: enumeratorLabel('reasons', 'إجازة غير مدفوعة الأجر') },
    { id: 'أخرى يرجى التحديد:', label: enumeratorLabel('reasons', 'أخرى يرجى التحديد:') },
  ],{}),
  others: new StringField('others', label('others'), {}),
  noDays: new IntegerField('noDays', label('noDays'), {}),
  noTaken: new IntegerField('noTaken', label('noTaken'), {}),
  noBalance: new IntegerField('noBalance', label('noBalance'), {}),
  remarks: new StringField('remarks', label('remarks'), {}),
  status: new EnumeratorField('status', label('status'), [
    { id: 'تمت الموافقة عليها من قبل الإدارة المختصة', label: enumeratorLabel('status', 'تمت الموافقة عليها من قبل الإدارة المختصة') },
    { id: 'رفضتها الإدارة المختصة', label: enumeratorLabel('status', 'رفضتها الإدارة المختصة') },
    { id: 'موافقة إدارة الموارد البشرية', label: enumeratorLabel('status', 'موافقة إدارة الموارد البشرية') },
    { id: 'رفضنها إدارة الموارد البشرية', label: enumeratorLabel('status', 'رفضنها إدارة الموارد البشرية') },
    { id: 'موافقة المدير العام', label: enumeratorLabel('status', 'موافقة المدير العام') },
    { id: 'رفضها المدير العام', label: enumeratorLabel('status', 'رفضها المدير العام') },
  ],{}),
  jobs: JobsField.relationToOne('jobs', label('jobs'), {
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
  dateRange: new DateRangeField(
    'dateRange',
    label('dateRange'),
  ),
  absenceWorkRange: new IntegerRangeField(
    'absenceWorkRange',
    label('absenceWorkRange'),
  ),
  periodRange: new DateRangeField(
    'periodRange',
    label('periodRange'),
  ),
  noDaysRange: new IntegerRangeField(
    'noDaysRange',
    label('noDaysRange'),
  ),
  noTakenRange: new IntegerRangeField(
    'noTakenRange',
    label('noTakenRange'),
  ),
  noBalanceRange: new IntegerRangeField(
    'noBalanceRange',
    label('noBalanceRange'),
  ),
};

export class LeaveApplicationFormModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
