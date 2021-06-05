import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { ClientsApi } from 'src/app/clients/clients.api';
import { ClientsListService } from 'src/app/clients/list/clients-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class ClientsDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private clientsListService: ClientsListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await ClientsApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.clients.destroy.success'),
      );

      this.router.navigate(['/clients']);

      await this.clientsListService.doFetch(
        this.clientsListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await ClientsApi.destroyAll(ids);
      this.loading = false;

      this.clientsListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.clients.destroyAll.success'),
      );

      this.router.navigate(['/clients']);

      return this.clientsListService.doFetch(
        this.clientsListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
