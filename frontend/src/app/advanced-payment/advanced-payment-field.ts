import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { AdvancedPaymentApi } from 'src/app/advanced-payment/advanced-payment.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class AdvancedPaymentField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/advanced-payment',
      Permissions.values.advancedPaymentRead,
      AdvancedPaymentApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.id,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options?) {
    return new RelationToManyField(
      name,
      label,
      '/advanced-payment',
      Permissions.values.advancedPaymentRead,
      AdvancedPaymentApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.id,
        };
      },
      options,
    );
  }
}
