import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import SettingsApi from 'src/app/settings/settings-api';
import { environment } from 'src/environments/environment';
import { i18n, init as i18nInit } from 'src/i18n';
import { TenantApi } from 'src/app/tenant/tenant.api';
import { AuthToken } from 'src/app/auth/auth-token';
import { AuthApi } from 'src/app/auth/auth.api';

if (environment.production) {
  enableProdMode();
}

(async function () {
  try {
    const isSocialOnboardRequested = AuthApi.isSocialOnboardRequested();
    AuthToken.applyFromLocationUrlIfExists();
    await TenantApi.fetchAndApply();
    if (isSocialOnboardRequested) {
      await AuthApi.socialOnboard();
    }
    SettingsApi.applyThemeFromTenant();
    await i18nInit();
    document.title = i18n('app.title');
    const AppModule = (await import('src/app/app.module'))
      .AppModule;
    await platformBrowserDynamic().bootstrapModule(
      AppModule,
    );
  } catch (error) {
    console.error(error);
  }
})();
