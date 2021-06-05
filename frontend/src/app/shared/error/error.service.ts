import { Injectable } from '@angular/core';
import { i18n, i18nExists } from 'src/i18n';
import { Router } from '@angular/router';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { AuthApi } from 'src/app/auth/auth.api';

const DEFAULT_ERROR_MESSAGE = i18n(
  'errors.defaultErrorMessage',
);

function selectErrorKeyOrMessage(error) {
  if (error && error.response && error.response.data) {
    const data = error.response.data;

    if (data.error && data.error.message) {
      return data.error.message;
    }

    return String(data);
  }

  return error.message || DEFAULT_ERROR_MESSAGE;
}

function selectErrorMessage(error) {
  const key = selectErrorKeyOrMessage(error);

  if (i18nExists(key)) {
    return i18n(key);
  }

  return key;
}

function selectErrorCode(error) {
  if (error && error.response && error.response.status) {
    return error.response.status;
  }

  return 500;
}

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(
    private router: Router,
    private snackbar: Snackbar,
  ) {}

  handle(error) {
    if (selectErrorCode(error) === 403) {
      this.router.navigate(['/403']);
      return;
    }

    if (selectErrorCode(error) === 401) {
      AuthApi.signout();
      window.location.reload();
      return;
    }

    if ([400, 429].includes(selectErrorCode(error))) {
      this.snackbar.error(selectErrorMessage(error));
      return;
    }

    this.router.navigate(['/500']);
  }

  errorCode(error) {
    return selectErrorCode(error);
  }

  selectMessage(error) {
    return selectErrorMessage(error);
  }

  showMessage(error) {
    this.snackbar.error(selectErrorMessage(error));
  }
}
