import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-leave-application-form-importer',
  templateUrl: './leave-application-form-importer.component.html',
})
export class LeaveApplicationFormImporterComponent {
  constructor(private authService: AuthService) {}

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.leaveApplicationForm.menu'), '/leave-application-form'],
    [i18n('entities.leaveApplicationForm.importer.title')],
  ];
}
