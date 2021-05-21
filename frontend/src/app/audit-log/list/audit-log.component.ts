import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-audit-log',
  templateUrl: './audit-log.component.html',
})
export class AuditLogComponent implements OnInit {
  constructor(private authService: AuthService) {}

  async ngOnInit() {}

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('auditLog.menu')],
  ];
}
