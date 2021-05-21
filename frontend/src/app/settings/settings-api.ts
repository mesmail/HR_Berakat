import authAxios from 'src/app/shared/axios/auth-axios';
import AuthCurrentTenant from 'src/app/auth/auth-current-tenant';

export default class SettingsApi {
  static applyThemeFromTenant() {
    const currentSettings = AuthCurrentTenant.getSettings();

    if (currentSettings) {
      return this.applyTheme(currentSettings.theme);
    }

    this.applyTheme('default');
  }

  static async find() {
    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.get(
      `/tenant/${tenantId}/settings`,
    );

    return response.data;
  }

  static async save(settings) {
    const body = {
      settings,
    };

    const tenantId = AuthCurrentTenant.get();
    const response = await authAxios.put(
      `/tenant/${tenantId}/settings`,
      body,
    );
    return response.data;
  }

  static applyTheme(color) {
    const oldLink = document.getElementById('theme-link');

    if (oldLink) {
      oldLink.setAttribute(
        'href',
        `/assets/theme/${color}.css`,
      );
      return;
    }

    const link = document.createElement('link');
    link.setAttribute('id', 'theme-link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', `/assets/theme/${color}.css`);

    const head = document
      .getElementsByTagName('head')
      .item(0);

    if (!head) {
      return;
    }

    head.appendChild(link);
  }
}
