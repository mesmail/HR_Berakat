import { setLanguageCode } from 'src/i18n';

export class I18nUtil {
  static doChangeLanguage(language) {
    setLanguageCode(language);
    window.location.reload();
  }
}
