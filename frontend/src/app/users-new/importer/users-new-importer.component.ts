import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-users-new-importer',
  templateUrl: './users-new-importer.component.html',
})
export class UsersNewImporterComponent {
  constructor(private authService: AuthService) {}

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.usersNew.menu'), '/users-new'],
    [i18n('entities.usersNew.importer.title')],
  ];
}
