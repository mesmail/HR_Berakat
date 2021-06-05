import { Component, Input } from '@angular/core';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-i18n',
  template: `
    <span [innerHTML]="value"></span>
  `,
})
export class I18nComponent {
  @Input()
  key: String;
  @Input()
  args: String[];

  get value() {
    if (this.args) {
      return i18n(this.key, ...this.args);
    } else {
      return i18n(this.key);
    }
  }
}
