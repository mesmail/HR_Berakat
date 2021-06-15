import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardInformationModel } from 'src/app/card-information/card-information-model';
import { CardInformationViewService } from 'src/app/card-information/view/card-information-view.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-card-information-view',
  templateUrl: './card-information-view.component.html',
})
export class CardInformationViewComponent implements OnInit {
  constructor(
    private service: CardInformationViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return CardInformationModel.presenter(row, fieldName);
  }

  get fields() {
    return CardInformationModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.cardInformation.menu'), '/card-information'],
    [i18n('entities.cardInformation.view.title')],
  ];
}
