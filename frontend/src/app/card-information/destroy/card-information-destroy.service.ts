import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { CardInformationApi } from 'src/app/card-information/card-information.api';
import { CardInformationListService } from 'src/app/card-information/list/card-information-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class CardInformationDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private cardInformationListService: CardInformationListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await CardInformationApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.cardInformation.destroy.success'),
      );

      this.router.navigate(['/card-information']);

      await this.cardInformationListService.doFetch(
        this.cardInformationListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await CardInformationApi.destroyAll(ids);
      this.loading = false;

      this.cardInformationListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.cardInformation.destroyAll.success'),
      );

      this.router.navigate(['/card-information']);

      return this.cardInformationListService.doFetch(
        this.cardInformationListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
