import { Component, OnInit, Input } from '@angular/core';
import importerStatuses from 'src/app/shared/importer/importer-statuses';

@Component({
  selector: 'app-importer-row-status',
  templateUrl: './importer-row-status.component.html',
})
export class ImporterRowStatusComponent {
  @Input()
  value;

  @Input()
  errorMessage: String;

  get isPending() {
    return this.value === importerStatuses.PENDING;
  }

  get isImported() {
    return this.value === importerStatuses.IMPORTED;
  }

  get isError() {
    return this.value === importerStatuses.ERROR;
  }
}
