import { Component, OnInit } from '@angular/core';
import { getLanguages } from 'src/i18n';
import { I18nUtil } from 'src/app/shared/i18n/i18n.util';

@Component({
  selector: 'app-i18n-flags',
  templateUrl: './i18n-flags.component.html',
  styleUrls: ['./i18n-flags.component.css'],
})
export class I18nFlagsComponent implements OnInit {
  languages: any[];

  constructor() {}

  ngOnInit(): void {
    this.languages = getLanguages();
  }

  doChangeLanguage(language) {
    I18nUtil.doChangeLanguage(language);
  }
}
