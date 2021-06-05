import { Component, OnInit } from '@angular/core';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import {
  EXCEL_TYPE,
  EXCEL_EXTENSION,
} from 'src/app/shared/excel/excel';

@Component({
  selector: 'app-importer-form',
  templateUrl: './importer-form.component.html',
})
export class ImporterFormComponent {
  constructor(public service: ImporterService) {}

  handleFileChange(event) {
    const files = event.target.files;

    if (files && files[0]) {
      this.service.doReadFile(files[0]);
    }
  }

  get accept() {
    return `${EXCEL_TYPE}, ${EXCEL_EXTENSION}`;
  }
}
