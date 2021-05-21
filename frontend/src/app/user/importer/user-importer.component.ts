import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-user-importer',
  templateUrl: './user-importer.component.html',
})
export class UserImporterComponent implements OnInit {
  constructor(private authService: AuthService) {}

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('user.menu'), '/user'],
    [i18n('user.importer.title')],
  ];

  ngOnInit(): void {}
}
