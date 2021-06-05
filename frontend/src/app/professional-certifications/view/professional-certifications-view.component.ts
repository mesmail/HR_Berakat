import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfessionalCertificationsModel } from 'src/app/professional-certifications/professional-certifications-model';
import { ProfessionalCertificationsViewService } from 'src/app/professional-certifications/view/professional-certifications-view.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-professional-certifications-view',
  templateUrl: './professional-certifications-view.component.html',
})
export class ProfessionalCertificationsViewComponent implements OnInit {
  constructor(
    private service: ProfessionalCertificationsViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return ProfessionalCertificationsModel.presenter(row, fieldName);
  }

  get fields() {
    return ProfessionalCertificationsModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.professionalCertifications.menu'), '/professional-certifications'],
    [i18n('entities.professionalCertifications.view.title')],
  ];
}
