import { AuthToken } from 'src/app/auth/auth-token';
import { getLanguageCode } from 'src/i18n';
import { environment } from 'src/environments/environment';
import Axios from 'axios';
import * as moment from 'moment';
import Qs from 'qs';

const authAxios = Axios.create({
  baseURL: environment.backendUrl,
  paramsSerializer: function (params) {
    return Qs.stringify(params, {
      arrayFormat: 'brackets',
      filter: (prefix, value) => {
        if (
          value instanceof moment ||
          value instanceof Date
        ) {
          return (<any>value).toISOString();
        }

        return value;
      },
    });
  },
});

authAxios.interceptors.request.use(
  async function (options) {
    const token = AuthToken.get();

    if (token) {
      options.headers['Authorization'] = `Bearer ${token}`;
    }

    options.headers['Accept-Language'] = getLanguageCode();

    return options;
  },
  function (error) {
    console.log('Request error: ', error);
    return Promise.reject(error);
  },
);

export default authAxios;
