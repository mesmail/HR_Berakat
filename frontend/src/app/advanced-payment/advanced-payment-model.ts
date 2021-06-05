import { GenericModel } from 'src/app/shared/model/generic-model';
import { i18n } from 'src/i18n';
import DateTimeField from 'src/app/shared/fields/date-time-field';
import IdField from 'src/app/shared/fields/id-field';
import DateTimeRangeField from 'src/app/shared/fields/date-time-range-field';
import StringField from 'src/app/shared/fields/string-field';
import DecimalRangeField from 'src/app/shared/fields/decimal-range-field';
import DecimalField from 'src/app/shared/fields/decimal-field';
import DateField from 'src/app/shared/fields/date-field';
import DateRangeField from 'src/app/shared/fields/date-range-field';

function label(name) {
  return i18n(`entities.advancedPayment.fields.${name}`);
}

function placeholder(name) {
  return i18n(`entities.advancedPayment.placeholders.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  amount: new DecimalField('amount', label('amount'), {
    "placeholder": placeholder('amount'),
    "max": 10000
  }),
  dateRequired: new DateField('dateRequired', label('dateRequired'), {}),
  paymentReason: new StringField('paymentReason', label('paymentReason'), {
    "placeholder": placeholder('paymentReason')
  }),
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
  amountRange: new DecimalRangeField(
    'amountRange',
    label('amountRange'),
  ),
  dateRequiredRange: new DateRangeField(
    'dateRequiredRange',
    label('dateRequiredRange'),
  ),
};

export class AdvancedPaymentModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
