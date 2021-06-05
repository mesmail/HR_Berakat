import { Component, OnInit } from '@angular/core';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { SettingsService } from 'src/app/settings/settings.service';
import { UserService } from 'src/app/user/user.service';
import { PlanService } from 'src/app/plan/plan.service';
import { CandidatesService } from 'src/app/candidates/candidates.service';
import { JobsService } from 'src/app/jobs/jobs.service';
import { DepartmentsService } from 'src/app/departments/departments.service';
import { AcademicCertificatesService } from 'src/app/academic-certificates/academic-certificates.service';
import { SoftSkillsService } from 'src/app/soft-skills/soft-skills.service';
import { TrainingCertificatesService } from 'src/app/training-certificates/training-certificates.service';
import { ProfessionalCertificationsService } from 'src/app/professional-certifications/professional-certifications.service';
import { ManagementSkillsService } from 'src/app/management-skills/management-skills.service';
import { ArtisticSkillsService } from 'src/app/artistic-skills/artistic-skills.service';
import { ClientsService } from 'src/app/clients/clients.service';
import { UsersNewService } from 'src/app/users-new/users-new.service';
import { JobFrameworksService } from 'src/app/job-frameworks/job-frameworks.service';
import { LeaveApplicationFormService } from 'src/app/leave-application-form/leave-application-form.service';
import { ClaimService } from 'src/app/claim/claim.service';
import { AdvancedPaymentService } from 'src/app/advanced-payment/advanced-payment.service';
import { TellProblemService } from 'src/app/tell-problem/tell-problem.service';
import { EmploymentContractService } from 'src/app/employment-contract/employment-contract.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  constructor(
    public auditLogService: AuditLogService,
    public settingsService: SettingsService,
    public userService: UserService,
    public planService: PlanService,
    public candidatesService: CandidatesService,
    public jobsService: JobsService,
    public departmentsService: DepartmentsService,
    public academicCertificatesService: AcademicCertificatesService,
    public softSkillsService: SoftSkillsService,
    public trainingCertificatesService: TrainingCertificatesService,
    public professionalCertificationsService: ProfessionalCertificationsService,
    public managementSkillsService: ManagementSkillsService,
    public artisticSkillsService: ArtisticSkillsService,
    public clientsService: ClientsService,
    public usersNewService: UsersNewService,
    public jobFrameworksService: JobFrameworksService,
    public leaveApplicationFormService: LeaveApplicationFormService,
    public claimService: ClaimService,
    public advancedPaymentService: AdvancedPaymentService,
    public tellProblemService: TellProblemService,
    public employmentContractService: EmploymentContractService,
  ) {}

  ngOnInit(): void {}
}
