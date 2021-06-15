import { EmploymentContractModel } from 'src/app/employment-contract/employment-contract-model';

const { fields } = EmploymentContractModel;

export default [
  fields.contractDate,
  fields.companyRepresentative,
  fields.secondParty,
  fields.nationality,
  fields.passportNumber,
  fields.passportIssueDate,
  fields.email,
  fields.jobTitle,
  fields.dailyWorkingHours,
  fields.weeklyWorkingHours,
  fields.weekEndDay,
  fields.workStartDate,
  fields.employeeName,
  fields.positionName,
  fields.basicSalary,
];
