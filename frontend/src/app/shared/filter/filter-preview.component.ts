import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-filter-preview',
  templateUrl: './filter-preview.component.html',
})
export class FilterPreviewComponent {
  @Input()
  values: any;
  @Input()
  fields: any;
  @Input()
  expanded: boolean;
  @Output()
  remove = new EventEmitter();

  doRemove(event, key) {
    event.stopPropagation();
    this.remove.emit(key);
  }

  get items() {
    return Object.keys(this.values || {})
      .map((key) => {
        if (!this.fields[key]) {
          return {
            value: null,
          };
        }

        return {
          key: key,
          label: this.fields[key].label,
          value: this.fields[key].forFilterPreview(
            this.values[key],
          ),
        };
      })
      .filter(
        (item) =>
          item &&
          (item.value ||
            item.value === 0 ||
            item.value === false),
      );
  }
}
