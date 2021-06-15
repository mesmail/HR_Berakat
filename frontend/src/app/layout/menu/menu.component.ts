import { Component, OnInit } from '@angular/core';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { SettingsService } from 'src/app/settings/settings.service';
import { UserService } from 'src/app/user/user.service';
import { PlanService } from 'src/app/plan/plan.service';
import { JobsService } from 'src/app/jobs/jobs.service';
import { CandidatesService } from 'src/app/candidates/candidates.service';
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
import { EmploymentContractService } from 'src/app/employment-contract/employment-contract.service';
import { ConnectionLevelService } from 'src/app/connection-level/connection-level.service';
import { CommonComiteesService } from 'src/app/common-comitees/common-comitees.service';
import { JobRequirmentsService } from 'src/app/job-requirments/job-requirments.service';
import { JobPathService } from 'src/app/job-path/job-path.service';
import { TasksDutiesService } from 'src/app/tasks-duties/tasks-duties.service';
import { AdministrativeFinancialPowersService } from 'src/app/administrative-financial-powers/administrative-financial-powers.service';
import { CardInformationService } from 'src/app/card-information/card-information.service';
import { TellProblemService } from 'src/app/tell-problem/tell-problem.service';
import { DepartmentsService } from 'src/app/departments/departments.service';

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
    public jobsService: JobsService,
    public candidatesService: CandidatesService,
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
    public employmentContractService: EmploymentContractService,
    public connectionLevelService: ConnectionLevelService,
    public commonComiteesService: CommonComiteesService,
    public jobRequirmentsService: JobRequirmentsService,
    public jobPathService: JobPathService,
    public tasksDutiesService: TasksDutiesService,
    public administrativeFinancialPowersService: AdministrativeFinancialPowersService,
    public cardInformationService: CardInformationService,
    public tellProblemService: TellProblemService,
    public departmentsService: DepartmentsService,
  ) {}

  ngOnInit(): void {}
}
