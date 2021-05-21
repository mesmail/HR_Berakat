import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-departments-importer',
  templateUrl: './departments-importer.component.html',
})
export class DepartmentsImporterComponent {
  constructor(private authService: AuthService) {}

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.departments.menu'), '/departments'],
    [i18n('entities.departments.importer.title')],
  ];
}
