import { GenericModel } from 'src/app/shared/model/generic-model';
import { i18n } from 'src/i18n';
import DateTimeField from 'src/app/shared/fields/date-time-field';
import IdField from 'src/app/shared/fields/id-field';
import DateTimeRangeField from 'src/app/shared/fields/date-time-range-field';
import StringField from 'src/app/shared/fields/string-field';
import { DepartmentsField } from 'src/app/departments/departments-field';
import { SoftSkillsField } from 'src/app/soft-skills/soft-skills-field';
import { UserField } from 'src/app/user/user-field';

function label(name) {
  return i18n(`entities.jobs.fields.${name}`);
}

function placeholder(name) {
  return i18n(`entities.jobs.placeholders.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  positionName: new StringField('positionName', label('positionName'), {
    "placeholder": placeholder('positionName')
  }),
  department: DepartmentsField.relationToOne('department', label('department'), {
    "placeholder": placeholder('department')
  }),
  supervisor: UserField.relationToOne('supervisor', label('supervisor'), {
    "placeholder": placeholder('supervisor')
  }),
  jobLocation: new StringField('jobLocation', label('jobLocation'), {
    "placeholder": placeholder('jobLocation')
  }),
  jobCode: new StringField('jobCode', label('jobCode'), {
    "placeholder": placeholder('jobCode')
  }),
  releaseDate: new DateTimeField('releaseDate', label('releaseDate'), {
    "placeholder": placeholder('releaseDate')
  }),
  generalDescription: new StringField('generalDescription', label('generalDescription'), {
    "placeholder": placeholder('generalDescription')
  }),
  generalGoals: new StringField('generalGoals', label('generalGoals'), {
    "placeholder": placeholder('generalGoals')
  }),
  detailedGoals: new StringField('detailedGoals', label('detailedGoals'), {
    "placeholder": placeholder('detailedGoals')
  }),
  personalAndTechnicalSkills: SoftSkillsField.relationToOne('personalAndTechnicalSkills', label('personalAndTechnicalSkills'), {}),
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
  releaseDateRange: new DateTimeRangeField(
    'releaseDateRange',
    label('releaseDateRange'),
  ),
};

export class JobsModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
