import { LeaveApplicationFormModel } from 'src/app/leave-application-form/leave-application-form-model';

const { fields } = LeaveApplicationFormModel;

export default [
  fields.id,
  fields.name,
  fields.position,
  fields.department,
  fields.date,
  fields.contactNo,
  fields.employeeNo,
  fields.absenceWork,
  fields.period,
  fields.specify,
  fields.reasons,
  fields.others,
  fields.noDays,
  fields.noTaken,
  fields.noBalance,
  fields.remarks,
  fields.status,
  fields.createdAt,
  fields.updatedAt,
];
