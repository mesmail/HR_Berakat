import { AdvancedPaymentModel } from 'src/app/advanced-payment/advanced-payment-model';

const { fields } = AdvancedPaymentModel;

export default [
  fields.id,
  fields.amount,
  fields.dateRequired,
  fields.paymentReason,
  fields.createdAt,
  fields.updatedAt,
];
