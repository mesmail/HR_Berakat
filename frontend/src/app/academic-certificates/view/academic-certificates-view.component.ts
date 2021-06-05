import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AcademicCertificatesModel } from 'src/app/academic-certificates/academic-certificates-model';
import { AcademicCertificatesViewService } from 'src/app/academic-certificates/view/academic-certificates-view.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-academic-certificates-view',
  templateUrl: './academic-certificates-view.component.html',
})
export class AcademicCertificatesViewComponent implements OnInit {
  constructor(
    private service: AcademicCertificatesViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return AcademicCertificatesModel.presenter(row, fieldName);
  }

  get fields() {
    return AcademicCertificatesModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.academicCertificates.menu'), '/academic-certificates'],
    [i18n('entities.academicCertificates.view.title')],
  ];
}
