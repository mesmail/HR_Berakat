import { i18n } from 'src/i18n';

export class ValidationMessages {
  static get(
    code: string,
    label: string,
    parametersAsObject = {},
  ) {
    const parameters = Object.keys(parametersAsObject).map(
      (key) => parametersAsObject[key],
    );

    const messages = {
      required: i18n('validation.mixed.required').replace(
        '${path}',
        label,
      ),
      maxlength: i18n('validation.string.max')
        .replace('${path}', label)
        .replace('${max}', parameters[0]),
      minlength: i18n('validation.string.min')
        .replace('${path}', label)
        .replace('${min}', parameters[0]),
      max: i18n('validation.number.max')
        .replace('${path}', label)
        .replace('${max}', parameters[0]),
      min: i18n('validation.number.min')
        .replace('${path}', label)
        .replace('${min}', parameters[0]),
      maxArrayLength: i18n('validation.array.max')
        .replace('${path}', label)
        .replace('${max}', parameters[0]),
      minArrayLength: i18n('validation.array.min')
        .replace('${path}', label)
        .replace('${min}', parameters[0]),
      date: i18n('validation.mixed.default').replace(
        '${path}',
        label,
      ),
      pattern: i18n('validation.mixed.default').replace(
        '${path}',
        label,
      ),
      datetime: i18n('validation.mixed.default').replace(
        '${path}',
        label,
      ),
      number: i18n('validation.number.type').replace(
        '${path}',
        label,
      ),
      integer: i18n('validation.number.integer').replace(
        '${path}',
        label,
      ),
      passwordMustMatch: i18n(
        'auth.passwordChange.mustMatch',
      ),
    };

    return messages[code];
  }
}
