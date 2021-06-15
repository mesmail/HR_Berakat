import { GenericModel } from 'src/app/shared/model/generic-model';
import { i18n } from 'src/i18n';
import DateTimeField from 'src/app/shared/fields/date-time-field';
import IdField from 'src/app/shared/fields/id-field';
import DateTimeRangeField from 'src/app/shared/fields/date-time-range-field';
import StringField from 'src/app/shared/fields/string-field';
import { DepartmentsField } from 'src/app/departments/departments-field';
import { AcademicCertificatesField } from 'src/app/academic-certificates/academic-certificates-field';
import { TrainingCertificatesField } from 'src/app/training-certificates/training-certificates-field';
import { ProfessionalCertificationsField } from 'src/app/professional-certifications/professional-certifications-field';
import { SoftSkillsField } from 'src/app/soft-skills/soft-skills-field';
import { ManagementSkillsField } from 'src/app/management-skills/management-skills-field';
import { ArtisticSkillsField } from 'src/app/artistic-skills/artistic-skills-field';
import { JobFrameworksField } from 'src/app/job-frameworks/job-frameworks-field';
import { ConnectionLevelField } from 'src/app/connection-level/connection-level-field';
import { CommonComiteesField } from 'src/app/common-comitees/common-comitees-field';
import { JobRequirmentsField } from 'src/app/job-requirments/job-requirments-field';
import { JobPathField } from 'src/app/job-path/job-path-field';
import { TasksDutiesField } from 'src/app/tasks-duties/tasks-duties-field';
import { AdministrativeFinancialPowersField } from 'src/app/administrative-financial-powers/administrative-financial-powers-field';
import { CardInformationField } from 'src/app/card-information/card-information-field';
import { UserField } from 'src/app/user/user-field';

function label(name) {
  return i18n(`entities.jobs.fields.${name}`);
}

function placeholder(name) {
  return i18n(`entities.jobs.placeholders.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  positionName: new StringField(
    'positionName',
    label('positionName'),
    {},
  ),
  department: DepartmentsField.relationToMany(
    'department',
    label('department'),
    {},
  ),
  supervisor: UserField.relationToOne(
    'supervisor',
    label('supervisor'),
    {
      placeholder: placeholder('supervisor'),
    },
  ),
  jobLocation: new StringField(
    'jobLocation',
    label('jobLocation'),
    {
      placeholder: placeholder('jobLocation'),
    },
  ),
  jobCode: new StringField('jobCode', label('jobCode'), {
    placeholder: placeholder('jobCode'),
  }),
  generalDescription: new StringField(
    'generalDescription',
    label('generalDescription'),
    {
      placeholder: placeholder('generalDescription'),
    },
  ),
  generalGoals: new StringField(
    'generalGoals',
    label('generalGoals'),
    {
      placeholder: placeholder('generalGoals'),
    },
  ),
  detailedGoals: new StringField(
    'detailedGoals',
    label('detailedGoals'),
    {
      placeholder: placeholder('detailedGoals'),
    },
  ),
  academicCertificates:
    AcademicCertificatesField.relationToOne(
      'academicCertificates',
      label('academicCertificates'),
      {},
    ),
  trainingCertificates:
    TrainingCertificatesField.relationToOne(
      'trainingCertificates',
      label('trainingCertificates'),
      {},
    ),
  professionalCertificates:
    ProfessionalCertificationsField.relationToOne(
      'professionalCertificates',
      label('professionalCertificates'),
      {},
    ),
  softSkills: SoftSkillsField.relationToOne(
    'softSkills',
    label('softSkills'),
    {},
  ),
  managementSkills: ManagementSkillsField.relationToOne(
    'managementSkills',
    label('managementSkills'),
    {},
  ),
  artitistikSkills: ArtisticSkillsField.relationToOne(
    'artitistikSkills',
    label('artitistikSkills'),
    {},
  ),
  jobFramework: JobFrameworksField.relationToOne(
    'jobFramework',
    label('jobFramework'),
    {},
  ),
  connectionLevel: ConnectionLevelField.relationToOne(
    'connectionLevel',
    label('connectionLevel'),
    {},
  ),
  commonCommittees: CommonComiteesField.relationToMany(
    'commonCommittees',
    label('commonCommittees'),
    {},
  ),
  jobRequirments: JobRequirmentsField.relationToOne(
    'jobRequirments',
    label('jobRequirments'),
    {},
  ),
  jobPath: JobPathField.relationToOne(
    'jobPath',
    label('jobPath'),
    {},
  ),
  tasksDuties: TasksDutiesField.relationToOne(
    'tasksDuties',
    label('tasksDuties'),
    {},
  ),
  administrativeFinancialPowers:
    AdministrativeFinancialPowersField.relationToOne(
      'administrativeFinancialPowers',
      label('administrativeFinancialPowers'),
      {},
    ),
  cardInformation: CardInformationField.relationToOne(
    'cardInformation',
    label('cardInformation'),
    {
      required: true,
    },
  ),
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

export class JobsModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
