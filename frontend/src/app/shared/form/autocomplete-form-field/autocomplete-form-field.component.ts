import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { debounce } from 'lodash';
import { isString } from 'lodash';

const AUTOCOMPLETE_FETCH_SIZE = 100;

@Component({
  selector: 'app-autocomplete-form-field',
  templateUrl: './autocomplete-form-field.component.html',
})
export class AutocompleteFormFieldComponent
  implements OnInit {
  @Output() createModalOpen = new EventEmitter();

  @Input() submitted = false;
  @Input() control;
  @Input() label;
  @Input() hint;
  @Input() placeholder;
  @Input() required = false;
  @Input() appAutofocus = false;
  @Input() serverSideSearch = false;
  @Input() fetchFn = null;
  @Input() showCreate = false;

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

  clearIfNonSelected() {
    if (this.control.value && this.control.value.id) {
      return;
    }

    this.control.setValue(null);
  }

  openCreateModal(event) {
    event.stopPropagation();
    this.createModalOpen.emit();
  }
}
