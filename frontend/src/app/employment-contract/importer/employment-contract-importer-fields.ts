import { EmploymentContractModel } from 'src/app/employment-contract/employment-contract-model';

const { fields } = EmploymentContractModel;

export default [
  fields.employeeName,
  fields.workingPeriod,
  fields.employmentSalary,
  fields.jobRoles,
  fields.employeeContactEmail,
  fields.mobileNumber,
  fields.homeAddress,
  fields.contractPeriod,
  fields.startDate,
];
