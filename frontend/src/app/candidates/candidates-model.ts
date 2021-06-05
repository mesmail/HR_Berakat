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
import { AcademicCertificatesField } from 'src/app/academic-certificates/academic-certificates-field';
import { TrainingCertificatesField } from 'src/app/training-certificates/training-certificates-field';
import { SoftSkillsField } from 'src/app/soft-skills/soft-skills-field';
import { ManagementSkillsField } from 'src/app/management-skills/management-skills-field';
import { ArtisticSkillsField } from 'src/app/artistic-skills/artistic-skills-field';
import { Storage } from 'src/security/storage';
import FilesField from 'src/app/shared/fields/files-field';
import ImagesField from 'src/app/shared/fields/images-field';

function label(name) {
  return i18n(`entities.candidates.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.candidates.enumerators.${name}.${value}`);
}

function placeholder(name) {
  return i18n(`entities.candidates.placeholders.${name}`);
}

function hint(name) {
  return i18n(`entities.candidates.hints.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  candidateName: new StringField('candidateName', label('candidateName'), {
    "placeholder": placeholder('candidateName'),
    "required": true,
    "min": 2,
    "max": 255
  }),
  currentPosition: JobsField.relationToOne('currentPosition', label('currentPosition'), {
    "placeholder": placeholder('currentPosition')
  }),
  candidateReference: new StringField('candidateReference', label('candidateReference'), {
    "placeholder": placeholder('candidateReference'),
    "required": true
  }),
  gender: new EnumeratorField('gender', label('gender'), [
    { id: 'ذكر', label: enumeratorLabel('gender', 'ذكر') },
    { id: 'أنثى', label: enumeratorLabel('gender', 'أنثى') },
  ],{
    "placeholder": placeholder('gender'),
    "required": true
  }),
  academicCertificateSpecialization: AcademicCertificatesField.relationToOne('academicCertificateSpecialization', label('academicCertificateSpecialization'), {
    "placeholder": placeholder('academicCertificateSpecialization')
  }),
  trainingCertificates: TrainingCertificatesField.relationToOne('trainingCertificates', label('trainingCertificates'), {}),
  currentCompany: new StringField('currentCompany', label('currentCompany'), {
    "placeholder": placeholder('currentCompany')
  }),
  noticePeriod: new IntegerField('noticePeriod', label('noticePeriod'), {
    "placeholder": placeholder('noticePeriod')
  }),
  currentSalary: new IntegerField('currentSalary', label('currentSalary'), {}),
  expectedSalary: new IntegerField('expectedSalary', label('expectedSalary'), {}),
  softSkills: SoftSkillsField.relationToOne('softSkills', label('softSkills'), {}),
  managementSkills: ManagementSkillsField.relationToOne('managementSkills', label('managementSkills'), {}),
  artisticSkills: ArtisticSkillsField.relationToOne('artisticSkills', label('artisticSkills'), {}),
  candidateCreatedDate: new DateField('candidateCreatedDate', label('candidateCreatedDate'), {
    "placeholder": placeholder('candidateCreatedDate')
  }),
  jobs: JobsField.relationToOne('jobs', label('jobs'), {}),
  resume: new FilesField('resume', label('resume'), Storage.values.candidatesResume, {
    "hint": hint('resume')
  }),
  photo: new ImagesField('photo', label('photo'),Storage.values.candidatesPhoto, {
    "hint": hint('photo')
  }),
  tactLevel: new EnumeratorField('tactLevel', label('tactLevel'), [
    { id: 'عالي', label: enumeratorLabel('tactLevel', 'عالي') },
    { id: 'عادي', label: enumeratorLabel('tactLevel', 'عادي') },
  ],{}),
  yearsExperience: new IntegerField('yearsExperience', label('yearsExperience'), {
    "max": 30
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
  noticePeriodRange: new IntegerRangeField(
    'noticePeriodRange',
    label('noticePeriodRange'),
  ),
  currentSalaryRange: new IntegerRangeField(
    'currentSalaryRange',
    label('currentSalaryRange'),
  ),
  expectedSalaryRange: new IntegerRangeField(
    'expectedSalaryRange',
    label('expectedSalaryRange'),
  ),
  candidateCreatedDateRange: new DateRangeField(
    'candidateCreatedDateRange',
    label('candidateCreatedDateRange'),
  ),
  yearsExperienceRange: new IntegerRangeField(
    'yearsExperienceRange',
    label('yearsExperienceRange'),
  ),
};

export class CandidatesModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
