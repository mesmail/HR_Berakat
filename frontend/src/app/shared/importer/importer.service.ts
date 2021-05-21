import { chunk } from 'lodash';
import md5 from 'md5';
import importerStatuses from 'src/app/shared/importer/importer-statuses';
import { Importer } from 'src/app/shared/importer/importer';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';

export class ImporterService {
  errorService: ErrorService;
  _rows = null;
  errorMessage = null;
  importing = false;
  completed = false;
  prefix: string;
  importFn: any;
  importFields: any;
  templateFileName: string;
  batchSize: any;
  templateHelp: string;

  constructor(
    errorService: ErrorService,
    importFn,
    importFields,
    templateFileName,
    templateHelp,
    batchSize = 10,
  ) {
    this.errorService = errorService;
    this.importFn = importFn;
    this.importFields = importFields;
    this.templateFileName = templateFileName;
    this.batchSize = batchSize;
    this.templateHelp = templateHelp;
  }

  get rows() {
    return this._rows || [];
  }

  get hasRows() {
    return Boolean(this.rows.length);
  }

  get pendingRows() {
    return this.rows.filter(
      (row) => row._status === importerStatuses.PENDING,
    );
  }

  get pendingRowsCount() {
    return this.pendingRows.length;
  }

  get rowsCount() {
    return this.rows.length;
  }

  get importedRowsCount() {
    return this.rows.filter(
      (row) => row._status === importerStatuses.IMPORTED,
    ).length;
  }

  get nonPendingRowsCount() {
    return this.rowsCount - this.pendingRowsCount;
  }

  get errorRowsCount() {
    return this.rows.filter(
      (row) => row._status === importerStatuses.ERROR,
    ).length;
  }

  get percent() {
    return (
      (this.nonPendingRowsCount * 100) / this.rowsCount
    );
  }

  doReset() {
    this._rows = null;
    this.errorMessage = null;
    this.importing = false;
    this.completed = false;
  }

  doPause() {
    this.importing = false;
  }

  async doImport() {
    try {
      this.importing = true;
      const pendingRows = this.pendingRows;
      const importer = new Importer(this.importFields);

      const pendingBatches = chunk(
        pendingRows,
        this.batchSize,
      );

      for (let batch of pendingBatches) {
        const paused = !this.importing;

        if (paused) {
          return;
        }

        await Promise.all(
          batch.map((row) =>
            this._importRow(importer, row),
          ),
        );
      }

      this.importing = false;
      this.completed = true;
    } catch (error) {
      this.errorService.handle(error);
      this.importing = false;
    }
  }

  async _importRow(importer, row) {
    try {
      const importableRow = await importer.castForImport(
        row,
      );
      const importHash = md5(JSON.stringify(importableRow));
      await this.importFn(importableRow, importHash);

      const item = (this.rows || []).find(
        (item) => item._line === row._line,
      );

      if (!item) {
        return;
      }

      item._status = importerStatuses.IMPORTED;

      this._rows = [...this.rows];
    } catch (error) {
      const item = (this.rows || []).find(
        (item) => item._line === row._line,
      );

      if (!item) {
        return;
      }

      item._status = importerStatuses.ERROR;
      item._errorMessage = this.errorService.selectMessage(
        error,
      );
      this._rows = [...this.rows];
    }
  }

  async doDownloadTemplate() {
    const importer = new Importer(this.importFields);
    importer.downloadTemplate(this.templateFileName);
  }

  async doReadFile(file) {
    try {
      const importer = new Importer(this.importFields);

      let rawData = await importer.convertExcelFileToJson(
        file,
      );

      if (!rawData || !rawData.length) {
        throw new Error(
          i18n('importer.errors.invalidFileEmpty'),
        );
      }

      rawData = await Promise.all(
        rawData.map(async (row, index) => {
          return await importer.castForDisplay(row, index);
        }),
      );

      this.errorMessage = null;
      this._rows = rawData;
    } catch (error) {
      console.error(error);
      this.errorMessage = error.message
        ? error.message
        : error;
    }
  }
}
