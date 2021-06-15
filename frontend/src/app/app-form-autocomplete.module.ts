import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { TenantFormComponent } from 'src/app/tenant/form/tenant-form.component';

import { UserNewFormComponent } from 'src/app/user/form/user-new-form.component';
import { UserNewFormModalComponent } from 'src/app/user/form/user-new-form-modal.component';
import { UserNewFormModalService } from 'src/app/user/form/user-new-form-modal.service';
import { UserFormFieldComponent } from 'src/app/user/autocomplete/user-form-field.component';

import { JobsFormFieldComponent } from 'src/app/jobs/autocomplete/jobs-form-field.component';
import { JobsFormModalComponent } from 'src/app/jobs/form/jobs-form-modal.component';
import { JobsFormModalService } from 'src/app/jobs/form/jobs-form-modal.service';
import { JobsFormComponent } from 'src/app/jobs/form/jobs-form.component';

import { CandidatesFormFieldComponent } from 'src/app/candidates/autocomplete/candidates-form-field.component';
import { CandidatesFormModalComponent } from 'src/app/candidates/form/candidates-form-modal.component';
import { CandidatesFormModalService } from 'src/app/candidates/form/candidates-form-modal.service';
import { CandidatesFormComponent } from 'src/app/candidates/form/candidates-form.component';

import { AcademicCertificatesFormFieldComponent } from 'src/app/academic-certificates/autocomplete/academic-certificates-form-field.component';
import { AcademicCertificatesFormModalComponent } from 'src/app/academic-certificates/form/academic-certificates-form-modal.component';
import { AcademicCertificatesFormModalService } from 'src/app/academic-certificates/form/academic-certificates-form-modal.service';
import { AcademicCertificatesFormComponent } from 'src/app/academic-certificates/form/academic-certificates-form.component';

import { SoftSkillsFormFieldComponent } from 'src/app/soft-skills/autocomplete/soft-skills-form-field.component';
import { SoftSkillsFormModalComponent } from 'src/app/soft-skills/form/soft-skills-form-modal.component';
import { SoftSkillsFormModalService } from 'src/app/soft-skills/form/soft-skills-form-modal.service';
import { SoftSkillsFormComponent } from 'src/app/soft-skills/form/soft-skills-form.component';

import { TrainingCertificatesFormFieldComponent } from 'src/app/training-certificates/autocomplete/training-certificates-form-field.component';
import { TrainingCertificatesFormModalComponent } from 'src/app/training-certificates/form/training-certificates-form-modal.component';
import { TrainingCertificatesFormModalService } from 'src/app/training-certificates/form/training-certificates-form-modal.service';
import { TrainingCertificatesFormComponent } from 'src/app/training-certificates/form/training-certificates-form.component';

import { ProfessionalCertificationsFormFieldComponent } from 'src/app/professional-certifications/autocomplete/professional-certifications-form-field.component';
import { ProfessionalCertificationsFormModalComponent } from 'src/app/professional-certifications/form/professional-certifications-form-modal.component';
import { ProfessionalCertificationsFormModalService } from 'src/app/professional-certifications/form/professional-certifications-form-modal.service';
import { ProfessionalCertificationsFormComponent } from 'src/app/professional-certifications/form/professional-certifications-form.component';

import { ManagementSkillsFormFieldComponent } from 'src/app/management-skills/autocomplete/management-skills-form-field.component';
import { ManagementSkillsFormModalComponent } from 'src/app/management-skills/form/management-skills-form-modal.component';
import { ManagementSkillsFormModalService } from 'src/app/management-skills/form/management-skills-form-modal.service';
import { ManagementSkillsFormComponent } from 'src/app/management-skills/form/management-skills-form.component';

import { ArtisticSkillsFormFieldComponent } from 'src/app/artistic-skills/autocomplete/artistic-skills-form-field.component';
import { ArtisticSkillsFormModalComponent } from 'src/app/artistic-skills/form/artistic-skills-form-modal.component';
import { ArtisticSkillsFormModalService } from 'src/app/artistic-skills/form/artistic-skills-form-modal.service';
import { ArtisticSkillsFormComponent } from 'src/app/artistic-skills/form/artistic-skills-form.component';

import { ClientsFormFieldComponent } from 'src/app/clients/autocomplete/clients-form-field.component';
import { ClientsFormModalComponent } from 'src/app/clients/form/clients-form-modal.component';
import { ClientsFormModalService } from 'src/app/clients/form/clients-form-modal.service';
import { ClientsFormComponent } from 'src/app/clients/form/clients-form.component';

import { UsersNewFormFieldComponent } from 'src/app/users-new/autocomplete/users-new-form-field.component';
import { UsersNewFormModalComponent } from 'src/app/users-new/form/users-new-form-modal.component';
import { UsersNewFormModalService } from 'src/app/users-new/form/users-new-form-modal.service';
import { UsersNewFormComponent } from 'src/app/users-new/form/users-new-form.component';

import { JobFrameworksFormFieldComponent } from 'src/app/job-frameworks/autocomplete/job-frameworks-form-field.component';
import { JobFrameworksFormModalComponent } from 'src/app/job-frameworks/form/job-frameworks-form-modal.component';
import { JobFrameworksFormModalService } from 'src/app/job-frameworks/form/job-frameworks-form-modal.service';
import { JobFrameworksFormComponent } from 'src/app/job-frameworks/form/job-frameworks-form.component';

import { LeaveApplicationFormFormFieldComponent } from 'src/app/leave-application-form/autocomplete/leave-application-form-form-field.component';
import { LeaveApplicationFormFormModalComponent } from 'src/app/leave-application-form/form/leave-application-form-form-modal.component';
import { LeaveApplicationFormFormModalService } from 'src/app/leave-application-form/form/leave-application-form-form-modal.service';
import { LeaveApplicationFormFormComponent } from 'src/app/leave-application-form/form/leave-application-form-form.component';

import { EmploymentContractFormFieldComponent } from 'src/app/employment-contract/autocomplete/employment-contract-form-field.component';
import { EmploymentContractFormModalComponent } from 'src/app/employment-contract/form/employment-contract-form-modal.component';
import { EmploymentContractFormModalService } from 'src/app/employment-contract/form/employment-contract-form-modal.service';
import { EmploymentContractFormComponent } from 'src/app/employment-contract/form/employment-contract-form.component';

import { ConnectionLevelFormFieldComponent } from 'src/app/connection-level/autocomplete/connection-level-form-field.component';
import { ConnectionLevelFormModalComponent } from 'src/app/connection-level/form/connection-level-form-modal.component';
import { ConnectionLevelFormModalService } from 'src/app/connection-level/form/connection-level-form-modal.service';
import { ConnectionLevelFormComponent } from 'src/app/connection-level/form/connection-level-form.component';

import { CommonComiteesFormFieldComponent } from 'src/app/common-comitees/autocomplete/common-comitees-form-field.component';
import { CommonComiteesFormModalComponent } from 'src/app/common-comitees/form/common-comitees-form-modal.component';
import { CommonComiteesFormModalService } from 'src/app/common-comitees/form/common-comitees-form-modal.service';
import { CommonComiteesFormComponent } from 'src/app/common-comitees/form/common-comitees-form.component';

import { JobRequirmentsFormFieldComponent } from 'src/app/job-requirments/autocomplete/job-requirments-form-field.component';
import { JobRequirmentsFormModalComponent } from 'src/app/job-requirments/form/job-requirments-form-modal.component';
import { JobRequirmentsFormModalService } from 'src/app/job-requirments/form/job-requirments-form-modal.service';
import { JobRequirmentsFormComponent } from 'src/app/job-requirments/form/job-requirments-form.component';

import { JobPathFormFieldComponent } from 'src/app/job-path/autocomplete/job-path-form-field.component';
import { JobPathFormModalComponent } from 'src/app/job-path/form/job-path-form-modal.component';
import { JobPathFormModalService } from 'src/app/job-path/form/job-path-form-modal.service';
import { JobPathFormComponent } from 'src/app/job-path/form/job-path-form.component';

import { TasksDutiesFormFieldComponent } from 'src/app/tasks-duties/autocomplete/tasks-duties-form-field.component';
import { TasksDutiesFormModalComponent } from 'src/app/tasks-duties/form/tasks-duties-form-modal.component';
import { TasksDutiesFormModalService } from 'src/app/tasks-duties/form/tasks-duties-form-modal.service';
import { TasksDutiesFormComponent } from 'src/app/tasks-duties/form/tasks-duties-form.component';

import { AdministrativeFinancialPowersFormFieldComponent } from 'src/app/administrative-financial-powers/autocomplete/administrative-financial-powers-form-field.component';
import { AdministrativeFinancialPowersFormModalComponent } from 'src/app/administrative-financial-powers/form/administrative-financial-powers-form-modal.component';
import { AdministrativeFinancialPowersFormModalService } from 'src/app/administrative-financial-powers/form/administrative-financial-powers-form-modal.service';
import { AdministrativeFinancialPowersFormComponent } from 'src/app/administrative-financial-powers/form/administrative-financial-powers-form.component';

import { CardInformationFormFieldComponent } from 'src/app/card-information/autocomplete/card-information-form-field.component';
import { CardInformationFormModalComponent } from 'src/app/card-information/form/card-information-form-modal.component';
import { CardInformationFormModalService } from 'src/app/card-information/form/card-information-form-modal.service';
import { CardInformationFormComponent } from 'src/app/card-information/form/card-information-form.component';

import { TellProblemFormFieldComponent } from 'src/app/tell-problem/autocomplete/tell-problem-form-field.component';
import { TellProblemFormModalComponent } from 'src/app/tell-problem/form/tell-problem-form-modal.component';
import { TellProblemFormModalService } from 'src/app/tell-problem/form/tell-problem-form-modal.service';
import { TellProblemFormComponent } from 'src/app/tell-problem/form/tell-problem-form.component';

import { DepartmentsFormFieldComponent } from 'src/app/departments/autocomplete/departments-form-field.component';
import { DepartmentsFormModalComponent } from 'src/app/departments/form/departments-form-modal.component';
import { DepartmentsFormModalService } from 'src/app/departments/form/departments-form-modal.service';
import { DepartmentsFormComponent } from 'src/app/departments/form/departments-form.component';

/**
 * This module exists to avoid circular dependencies, because autocompletes and forms
 * from different modules may use each others.
 */
@NgModule({
  declarations: [
    TenantFormComponent,

    UserNewFormComponent,
    UserFormFieldComponent,
    UserNewFormModalComponent,

    JobsFormComponent,
    JobsFormFieldComponent,
    JobsFormModalComponent,

    CandidatesFormComponent,
    CandidatesFormFieldComponent,
    CandidatesFormModalComponent,

    AcademicCertificatesFormComponent,
    AcademicCertificatesFormFieldComponent,
    AcademicCertificatesFormModalComponent,

    SoftSkillsFormComponent,
    SoftSkillsFormFieldComponent,
    SoftSkillsFormModalComponent,

    TrainingCertificatesFormComponent,
    TrainingCertificatesFormFieldComponent,
    TrainingCertificatesFormModalComponent,

    ProfessionalCertificationsFormComponent,
    ProfessionalCertificationsFormFieldComponent,
    ProfessionalCertificationsFormModalComponent,

    ManagementSkillsFormComponent,
    ManagementSkillsFormFieldComponent,
    ManagementSkillsFormModalComponent,

    ArtisticSkillsFormComponent,
    ArtisticSkillsFormFieldComponent,
    ArtisticSkillsFormModalComponent,

    ClientsFormComponent,
    ClientsFormFieldComponent,
    ClientsFormModalComponent,

    UsersNewFormComponent,
    UsersNewFormFieldComponent,
    UsersNewFormModalComponent,

    JobFrameworksFormComponent,
    JobFrameworksFormFieldComponent,
    JobFrameworksFormModalComponent,

    LeaveApplicationFormFormComponent,
    LeaveApplicationFormFormFieldComponent,
    LeaveApplicationFormFormModalComponent,

    EmploymentContractFormComponent,
    EmploymentContractFormFieldComponent,
    EmploymentContractFormModalComponent,

    ConnectionLevelFormComponent,
    ConnectionLevelFormFieldComponent,
    ConnectionLevelFormModalComponent,

    CommonComiteesFormComponent,
    CommonComiteesFormFieldComponent,
    CommonComiteesFormModalComponent,

    JobRequirmentsFormComponent,
    JobRequirmentsFormFieldComponent,
    JobRequirmentsFormModalComponent,

    JobPathFormComponent,
    JobPathFormFieldComponent,
    JobPathFormModalComponent,

    TasksDutiesFormComponent,
    TasksDutiesFormFieldComponent,
    TasksDutiesFormModalComponent,

    AdministrativeFinancialPowersFormComponent,
    AdministrativeFinancialPowersFormFieldComponent,
    AdministrativeFinancialPowersFormModalComponent,

    CardInformationFormComponent,
    CardInformationFormFieldComponent,
    CardInformationFormModalComponent,

    TellProblemFormComponent,
    TellProblemFormFieldComponent,
    TellProblemFormModalComponent,

    DepartmentsFormComponent,
    DepartmentsFormFieldComponent,
    DepartmentsFormModalComponent,
  ],
  imports: [SharedModule],
  exports: [
    TenantFormComponent,

    UserNewFormComponent,
    UserFormFieldComponent,

    JobsFormComponent,
    JobsFormFieldComponent,

    CandidatesFormComponent,
    CandidatesFormFieldComponent,

    AcademicCertificatesFormComponent,
    AcademicCertificatesFormFieldComponent,

    SoftSkillsFormComponent,
    SoftSkillsFormFieldComponent,

    TrainingCertificatesFormComponent,
    TrainingCertificatesFormFieldComponent,

    ProfessionalCertificationsFormComponent,
    ProfessionalCertificationsFormFieldComponent,

    ManagementSkillsFormComponent,
    ManagementSkillsFormFieldComponent,

    ArtisticSkillsFormComponent,
    ArtisticSkillsFormFieldComponent,

    ClientsFormComponent,
    ClientsFormFieldComponent,

    UsersNewFormComponent,
    UsersNewFormFieldComponent,

    JobFrameworksFormComponent,
    JobFrameworksFormFieldComponent,

    LeaveApplicationFormFormComponent,
    LeaveApplicationFormFormFieldComponent,

    EmploymentContractFormComponent,
    EmploymentContractFormFieldComponent,

    ConnectionLevelFormComponent,
    ConnectionLevelFormFieldComponent,

    CommonComiteesFormComponent,
    CommonComiteesFormFieldComponent,

    JobRequirmentsFormComponent,
    JobRequirmentsFormFieldComponent,

    JobPathFormComponent,
    JobPathFormFieldComponent,

    TasksDutiesFormComponent,
    TasksDutiesFormFieldComponent,

    AdministrativeFinancialPowersFormComponent,
    AdministrativeFinancialPowersFormFieldComponent,

    CardInformationFormComponent,
    CardInformationFormFieldComponent,

    TellProblemFormComponent,
    TellProblemFormFieldComponent,

    DepartmentsFormComponent,
    DepartmentsFormFieldComponent,
  ],
  providers: [
    UserNewFormModalService,
    JobsFormModalService,

    CandidatesFormModalService,

    AcademicCertificatesFormModalService,

    SoftSkillsFormModalService,

    TrainingCertificatesFormModalService,

    ProfessionalCertificationsFormModalService,

    ManagementSkillsFormModalService,

    ArtisticSkillsFormModalService,

    ClientsFormModalService,

    UsersNewFormModalService,

    JobFrameworksFormModalService,

    LeaveApplicationFormFormModalService,

    EmploymentContractFormModalService,

    ConnectionLevelFormModalService,

    CommonComiteesFormModalService,

    JobRequirmentsFormModalService,

    JobPathFormModalService,

    TasksDutiesFormModalService,

    AdministrativeFinancialPowersFormModalService,

    CardInformationFormModalService,

    TellProblemFormModalService,

    DepartmentsFormModalService,
  ],
  entryComponents: [
    UserNewFormModalComponent,
    JobsFormModalComponent,

    CandidatesFormModalComponent,

    AcademicCertificatesFormModalComponent,

    SoftSkillsFormModalComponent,

    TrainingCertificatesFormModalComponent,

    ProfessionalCertificationsFormModalComponent,

    ManagementSkillsFormModalComponent,

    ArtisticSkillsFormModalComponent,

    ClientsFormModalComponent,

    UsersNewFormModalComponent,

    JobFrameworksFormModalComponent,

    LeaveApplicationFormFormModalComponent,

    EmploymentContractFormModalComponent,

    ConnectionLevelFormModalComponent,

    CommonComiteesFormModalComponent,

    JobRequirmentsFormModalComponent,

    JobPathFormModalComponent,

    TasksDutiesFormModalComponent,

    AdministrativeFinancialPowersFormModalComponent,

    CardInformationFormModalComponent,

    TellProblemFormModalComponent,

    DepartmentsFormModalComponent,
  ],
})
export class AppFormAutocompleteModule {}
