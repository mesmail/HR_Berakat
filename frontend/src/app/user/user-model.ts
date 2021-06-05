import StringField from 'src/app/shared/fields/string-field';
import IdField from 'src/app/shared/fields/id-field';
import DateTimeField from 'src/app/shared/fields/date-time-field';
import DateTimeRangeField from 'src/app/shared/fields/date-time-range-field';
import ImagesField from 'src/app/shared/fields/images-field';
import BooleanField from 'src/app/shared/fields/boolean-field';
import StringArrayField from 'src/app/shared/fields/string-array-field';
import GenericField from 'src/app/shared/fields/generic-field';
import * as yup from 'yup';
import EnumeratorField from 'src/app/shared/fields/enumerator-field';
import { Roles } from 'src/security/roles';
import { i18n } from 'src/i18n';
import { GenericModel } from 'src/app/shared/model/generic-model';
import { Storage } from 'src/security/storage';
class RolesField extends StringArrayField {
  options;

  constructor(name, label, config) {
    super(name, label, config);

    this.options = Roles.selectOptions;
  }

  forExport() {
    return yup
      .mixed()
      .label(this.label)
      .transform((values) =>
        values
          ? values
              .map((value) => Roles.labelOf(value))
              .join(' ')
          : null,
      );
  }
}

class EmailsField extends StringArrayField {
  forFormRules() {
    let yupValidator = yup
      .array()
      .label(this.label)
      .of(
        yup
          .string()
          .email(i18n('user.validations.email'))
          .label(i18n('user.fields.email'))
          .max(255)
          .required(),
      );

    if (this.required) {
      yupValidator = yupValidator.required().min(1);
    }

    const validator = (rule, value, callback) => {
      try {
        yupValidator.validateSync(value);
        callback();
      } catch (error) {
        callback(error);
      }
    };

    return [{ validator }];
  }
}

function label(name) {
  return i18n(`user.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  firstName: new StringField(
    'firstName',
    label('firstName'),
    {
      max: 80,
    },
  ),
  lastName: new StringField('lastName', label('lastName'), {
    max: 175,
  }),
  password: new StringField('password', label('password'), {
    required: true,
  }),
  oldPassword: new StringField(
    'oldPassword',
    label('oldPassword'),
    {
      required: true,
    },
  ),
  newPassword: new StringField(
    'newPassword',
    label('newPassword'),
    {
      required: true,
    },
  ),
  newPasswordConfirmation: new StringField(
    'newPasswordConfirmation',
    label('newPasswordConfirmation'),
    {
      required: true,
    },
  ),
  fullName: new StringField('fullName', label('fullName')),
  email: new StringField('email', label('email'), {
    required: true,
    max: 255,
  }),
  role: new EnumeratorField(
    'role',
    label('role'),
    Roles.selectOptions,
  ),
  rememberMe: new BooleanField(
    'rememberMe',
    label('rememberMe'),
  ),
  phoneNumber: new StringField(
    'phoneNumber',
    label('phoneNumber'),
    {
      matches: /^[0-9]/,
      max: 24,
    },
  ),
  avatars: new ImagesField(
    'avatars',
    label('avatars'),
    Storage.values.userAvatarsProfiles,
    { max: 1 },
  ),
  emails: new EmailsField('emails', label('emails'), {
    required: true,
  }),
  roles: new RolesField('roles', label('roles'), {}),
  rolesRequired: new RolesField('roles', label('roles'), {
    required: true,
  }),
  status: new EnumeratorField('status', label('status'), [
    {
      id: 'active',
      label: i18n('user.status.active'),
    },
    {
      id: 'invited',
      label: i18n('user.status.invited'),
    },
    {
      id: 'empty-permissions',
      label: i18n('user.status.empty-permissions'),
    },
  ]),
  createdAt: new DateTimeField(
    'createdAt',
    label('createdAt'),
  ),
  updatedAt: new DateTimeField(
    'updatedAt',
    label('updatedAt'),
  ),
  createdAtRange: new DateTimeRangeField(
    'createdAtRange',
    label('createdAtRange'),
  ),
  roleUser: new GenericField('roleUser', label('roleUser')),
};

export class UserModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
