import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounce } from 'lodash';
import { isString } from 'lodash';

const AUTOCOMPLETE_FETCH_SIZE = 100;

@Component({
  selector: 'app-autocomplete-multiple-form-field',
  templateUrl:
    './autocomplete-multiple-form-field.component.html',
})
export class AutocompleteMultipleFormFieldComponent {
  @Output() createModalOpen = new EventEmitter();

  @Input()
  submitted = false;

  @Input()
  control: FormControl;
  @Input()
  label: string;
  @Input()
  appAutofocus = false;
  @Input()
  required = false;
  @Input() serverSideSearch = false;
  @Input() fetchFn = null;
  @Input()
  ngForm: any;
  @Input() showCreate = false;
  @Input() hint;
  @Input() placeholder;

  @ViewChild('textInput', { static: true })
  textInput: ElementRef<HTMLInputElement>;

  add(event): void {
    const selectedValue = event.option.value;

    if (selectedValue) {
      const exists = (this.control.value || []).some(
        (item) => item.id === selectedValue.id,
      );

      if (!exists) {
        this.control.setValue([
          ...(this.control.value || []),
          selectedValue,
        ]);
      }
    }

    if (this.textInput) {
      this.textInput.nativeElement.value = '';
    }
  }

  remove(id): void {
    this.control.setValue([
      ...(this.control.value || []).filter(
        (item) => !item || item.id !== id,
      ),
    ]);
  }

  currentQuery = 'NOT_INITIALIZED';
  serverSideDataSource = [];
  clientSideDataSource = [];
  loading = false;
  debouncedSearch = (value) => {};

  get dataSource() {
    if (this.serverSideSearch) {
      return this.serverSideDataSource;
    }

    return this.clientSideDataSource;
  }

  async handleSearch(value) {
    if (!isString(value)) {
      return;
    }

    if (this.serverSideSearch) {
      return this.handleSearchServer(value);
    }

    return this.handleSearchClient(value);
  }

  async handleSearchClient(value) {
    if (
      !this.serverSideDataSource ||
      !this.serverSideDataSource.length
    ) {
      await this.handleSearchServer();
    }

    this.clientSideDataSource = this.serverSideDataSource.filter(
      (item) =>
        String(item.label || '')
          .toLowerCase()
          .includes(String(value || '').toLowerCase()),
    );

    this.loading = false;
  }

  async handleSearchServer(value?) {
    if (value === this.currentQuery) {
      return;
    }

    this.currentQuery = value;
    this.loading = true;

    try {
      const serverSideDataSource = await this.fetchFn(
        value,
        AUTOCOMPLETE_FETCH_SIZE,
      );
      if (this.currentQuery === value) {
        this.serverSideDataSource = serverSideDataSource;
        this.loading = false;
      }
    } catch (error) {
      console.error(error);

      if (this.currentQuery === value) {
        this.serverSideDataSource = [];
        this.loading = false;
      }
    }
  }

  ngOnInit() {
    this.debouncedSearch = debounce(
      this.handleSearch.bind(this),
      300,
    );

    // Fetch first results
    this.handleSearch('');
  }

  displayFn(record) {
    if (record) {
      return record.label;
    }
  }

  openCreateModal(event) {
    event.stopPropagation();
    this.createModalOpen.emit();
  }
}
