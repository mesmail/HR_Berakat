import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectionLevelModel } from 'src/app/connection-level/connection-level-model';
import { ConnectionLevelViewService } from 'src/app/connection-level/view/connection-level-view.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-connection-level-view',
  templateUrl: './connection-level-view.component.html',
})
export class ConnectionLevelViewComponent implements OnInit {
  constructor(
    private service: ConnectionLevelViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return ConnectionLevelModel.presenter(row, fieldName);
  }

  get fields() {
    return ConnectionLevelModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.connectionLevel.menu'), '/connection-level'],
    [i18n('entities.connectionLevel.view.title')],
  ];
}
