import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientsModel } from 'src/app/clients/clients-model';
import { ClientsViewService } from 'src/app/clients/view/clients-view.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-clients-view',
  templateUrl: './clients-view.component.html',
})
export class ClientsViewComponent implements OnInit {
  constructor(
    private service: ClientsViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return ClientsModel.presenter(row, fieldName);
  }

  get fields() {
    return ClientsModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.clients.menu'), '/clients'],
    [i18n('entities.clients.view.title')],
  ];
}
