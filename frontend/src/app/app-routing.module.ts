import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from 'src/app/layout/errors/error-404.component';
import { Error403Component } from 'src/app/layout/errors/error-403.component';
import { Error500Component } from 'src/app/layout/errors/error-500.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(
        (m) => m.DashboardModule,
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then(
        (m) => m.AuthModule,
      ),
  },
  {
    path: 'tenant',
    loadChildren: () =>
      import('./tenant/tenant.module').then(
        (m) => m.TenantModule,
      ),
  },
  {
    path: 'plan',
    loadChildren: () =>
      import('./plan/plan.module').then(
        (m) => m.PlanModule,
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user/user.module').then(
        (m) => m.UserModule,
      ),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./settings/settings.module').then(
        (m) => m.SettingsModule,
      ),
  },
  {
    path: 'audit-log',
    loadChildren: () =>
      import('./audit-log/audit-log.module').then(
        (m) => m.AuditLogModule,
      ),
  },
  {
    path: 'jobs',
    loadChildren: () => import('./jobs/jobs.module').then(m => m.JobsModule),
  },
  {
    path: 'candidates',
    loadChildren: () => import('./candidates/candidates.module').then(m => m.CandidatesModule),
  },
  {
    path: 'academic-certificates',
    loadChildren: () => import('./academic-certificates/academic-certificates.module').then(m => m.AcademicCertificatesModule),
  },
  {
    path: 'soft-skills',
    loadChildren: () => import('./soft-skills/soft-skills.module').then(m => m.SoftSkillsModule),
  },
  {
    path: 'training-certificates',
    loadChildren: () => import('./training-certificates/training-certificates.module').then(m => m.TrainingCertificatesModule),
  },
  {
    path: 'professional-certifications',
    loadChildren: () => import('./professional-certifications/professional-certifications.module').then(m => m.ProfessionalCertificationsModule),
  },
  {
    path: 'management-skills',
    loadChildren: () => import('./management-skills/management-skills.module').then(m => m.ManagementSkillsModule),
  },
  {
    path: 'artistic-skills',
    loadChildren: () => import('./artistic-skills/artistic-skills.module').then(m => m.ArtisticSkillsModule),
  },
  {
    path: 'clients',
    loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule),
  },
  {
    path: 'users-new',
    loadChildren: () => import('./users-new/users-new.module').then(m => m.UsersNewModule),
  },
  {
    path: 'job-frameworks',
    loadChildren: () => import('./job-frameworks/job-frameworks.module').then(m => m.JobFrameworksModule),
  },
  {
    path: 'leave-application-form',
    loadChildren: () => import('./leave-application-form/leave-application-form.module').then(m => m.LeaveApplicationFormModule),
  },
  {
    path: 'employment-contract',
    loadChildren: () => import('./employment-contract/employment-contract.module').then(m => m.EmploymentContractModule),
  },
  {
    path: 'connection-level',
    loadChildren: () => import('./connection-level/connection-level.module').then(m => m.ConnectionLevelModule),
  },
  {
    path: 'common-comitees',
    loadChildren: () => import('./common-comitees/common-comitees.module').then(m => m.CommonComiteesModule),
  },
  {
    path: 'job-requirments',
    loadChildren: () => import('./job-requirments/job-requirments.module').then(m => m.JobRequirmentsModule),
  },
  {
    path: 'job-path',
    loadChildren: () => import('./job-path/job-path.module').then(m => m.JobPathModule),
  },
  {
    path: 'tasks-duties',
    loadChildren: () => import('./tasks-duties/tasks-duties.module').then(m => m.TasksDutiesModule),
  },
  {
    path: 'administrative-financial-powers',
    loadChildren: () => import('./administrative-financial-powers/administrative-financial-powers.module').then(m => m.AdministrativeFinancialPowersModule),
  },
  {
    path: 'card-information',
    loadChildren: () => import('./card-information/card-information.module').then(m => m.CardInformationModule),
  },
  {
    path: 'tell-problem',
    loadChildren: () => import('./tell-problem/tell-problem.module').then(m => m.TellProblemModule),
  },
  {
    path: 'departments',
    loadChildren: () => import('./departments/departments.module').then(m => m.DepartmentsModule),
  },
  { path: '403', component: Error403Component },
  { path: '500', component: Error500Component },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routedComponents = [
  Error404Component,
  Error403Component,
  Error500Component,
];
