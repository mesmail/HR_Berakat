import { TellProblemModel } from 'src/app/tell-problem/tell-problem-model';

const { fields } = TellProblemModel;

export default [
  fields.id,
  fields.problemDescription,
  fields.occuranceDate,
  fields.possibleCauses,
  fields.suggestedSolves,
  fields.createdAt,
  fields.updatedAt,
];
