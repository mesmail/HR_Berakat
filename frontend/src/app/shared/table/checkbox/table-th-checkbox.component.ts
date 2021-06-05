import { Component, OnInit, Input } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-table-th-checkbox',
  templateUrl: './table-th-checkbox.component.html',
})
export class TableThCheckboxComponent {
  @Input()
  rows: any[] = [];

  @Input()
  selectedKeys: SelectionModel<any>;

  get isAllSelected() {
    const numSelected = this.selectedKeys.selected.length;
    const numRows = this.rows.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected
      ? this.selectedKeys.clear()
      : this.rows.forEach((row) =>
          this.selectedKeys.select(row.id),
        );
  }
}
