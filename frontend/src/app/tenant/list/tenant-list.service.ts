import { Injectable } from '@angular/core';
import { TenantApi } from 'src/app/tenant/tenant.api';
import { ErrorService } from 'src/app/shared/error/error.service';
import { SelectionModel } from '@angular/cdk/collections';

const INITIAL_PAGE_SIZE = 10;

@Injectable({
  providedIn: 'root',
})
export class TenantListService {
  rows = [];
  count = 0;
  loading = false;
  filter: any = {};
  _pagination: any = {};
  sorter: any = {};
  selectedKeys = new SelectionModel<any>(true, []);
  unlimited = false;

  constructor(private errorService: ErrorService) {}

  get hasRows() {
    return this.count > 0;
  }

  get orderBy() {
    const sorter = this.sorter;

    if (!sorter) {
      return null;
    }

    if (!sorter.columnKey) {
      return null;
    }

    let direction =
      sorter.order === 'desc' ? 'DESC' : 'ASC';

    return `${sorter.columnKey}_${direction}`;
  }

  get limit() {
    if (this.unlimited) {
      return 0;
    }

    const pagination = this._pagination;

    if (!pagination || !pagination.pageSize) {
      return INITIAL_PAGE_SIZE;
    }

    return pagination.pageSize;
  }

  get offset() {
    if (this.unlimited) {
      return 0;
    }

    const pagination = this._pagination;

    if (!pagination || !pagination.pageSize) {
      return 0;
    }

    return pagination.pageIndex * pagination.pageSize;
  }

  get pagination() {
    if (this.unlimited) {
      return false;
    }

    return {
      ...this._pagination,
      total: this.count,
      showSizeChanger: true,
    };
  }

  get paginationPageSize() {
    return this._pagination && this._pagination.pageSize
      ? this._pagination.pageSize
      : INITIAL_PAGE_SIZE;
  }

  get paginationPageIndex() {
    return this._pagination && this._pagination.pageIndex
      ? this._pagination.pageIndex
      : 0;
  }

  get selectedRows() {
    return this.rows.filter((row) =>
      this.selectedKeys.isSelected(row.id),
    );
  }

  doResetSelectedKeys() {
    this.selectedKeys = new SelectionModel<any>(true, []);
  }

  async doReset() {
    this.rows = [];
    this.count = 0;
    this.loading = false;
    this.filter = {};
    this._pagination = {};
    this.sorter = {};
    this.doResetSelectedKeys();

    return this.doFetch();
  }

  doChangePagination(event?) {
    this._pagination = event;
    this.doFetch(this.filter, true);
  }

  doChangeSort(event?) {
    this.sorter = event
      ? {
          columnKey: event.active,
          order: event.direction,
        }
      : {};
    this.doFetch(this.filter, true);
  }

  async doFetch(filter?, keepPagination = false) {
    try {
      this.loading = true;
      this.rows = [];
      this.count = 0;
      if (!keepPagination) {
        this._pagination = {};
      }
      this.filter = filter || {};
      this.doResetSelectedKeys();

      const response = await TenantApi.list(
        filter,
        this.orderBy,
        this.limit,
        this.offset,
      );

      this.rows = response.rows;
      this.count = response.count;
      this.loading = false;
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
      this.rows = [];
      this.count = 0;
    }
  }
}
