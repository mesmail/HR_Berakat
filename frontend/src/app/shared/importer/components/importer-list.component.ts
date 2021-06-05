import {
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-importer-list',
  templateUrl: './importer-list.component.html',
})
export class ImporterListComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dataSource: MatTableDataSource<any>;

  constructor(public service: ImporterService) {}

  columns = [
    '_line',
    ...this.service.importFields.map((importField) => {
      return importField.name;
    }),
    '_status',
  ];

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(
      this.service.rows,
    );

    this.dataSource.paginator = this.paginator;
  }
}
