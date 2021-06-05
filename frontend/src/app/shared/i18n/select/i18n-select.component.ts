import { Component, OnInit } from '@angular/core';
import {
  getLanguages,
  getLanguage,
} from 'src/i18n';
import { I18nUtil } from 'src/app/shared/i18n/i18n.util';

@Component({
  selector: 'app-i18n-select',
  templateUrl: './i18n-select.component.html',
})
export class I18nSelectComponent implements OnInit {
  languages: any[];

  constructor() {}

  ngOnInit(): void {
    this.languages = getLanguages();
  }

  get languageLabel() {
    return getLanguage().label;
  }

  doChangeLanguage(language) {
    I18nUtil.doChangeLanguage(language);
  }
}
