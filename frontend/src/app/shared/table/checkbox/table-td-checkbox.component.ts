import { Component, OnInit, Input } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-table-td-checkbox',
  templateUrl: './table-td-checkbox.component.html',
})
export class TableTdCheckboxComponent {
  @Input()
  row: any;

  @Input()
  selectedKeys: SelectionModel<any>;
}
