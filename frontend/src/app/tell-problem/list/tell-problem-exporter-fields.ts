import { TellProblemModel } from 'src/app/tell-problem/tell-problem-model';

const { fields } = TellProblemModel;

export default [
  fields.id,
  fields.problemDescription,
  fields.problemDate,
  fields.problemCauses,
  fields.problemSolutions,
  fields.createdAt,
  fields.updatedAt,
];
