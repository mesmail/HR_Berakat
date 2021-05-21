import GenericField from 'src/app/shared/fields/generic-field';
import * as yup from 'yup';

export default class JsonField extends GenericField {
  forPresenter(value) {
    return value;
  }

  forExport() {
    let yupChain = yup
      .mixed()
      .label(this.label)
      .transform((value, originalValue) => {
        return JSON.stringify(originalValue, null, 2);
      });
    return yupChain;
  }
}
