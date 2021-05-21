import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainingCertificatesModel } from 'src/app/training-certificates/training-certificates-model';
import { TrainingCertificatesViewService } from 'src/app/training-certificates/view/training-certificates-view.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-training-certificates-view',
  templateUrl: './training-certificates-view.component.html',
})
export class TrainingCertificatesViewComponent implements OnInit {
  constructor(
    private service: TrainingCertificatesViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return TrainingCertificatesModel.presenter(row, fieldName);
  }

  get fields() {
    return TrainingCertificatesModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.trainingCertificates.menu'), '/training-certificates'],
    [i18n('entities.trainingCertificates.view.title')],
  ];
}
