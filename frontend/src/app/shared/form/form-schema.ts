import * as yup from 'yup';

export class FormSchema {
  fields: any[];
  formBuilder: any;

  constructor(fields, formBuilder) {
    this.fields = fields;
    this.formBuilder = formBuilder;
  }

  buildForm(record = {}, options?) {
    record = record || {};
    const schema = {};

    for (const field of this.fields) {
      schema[field.name] = field.forFormControl(
        record[field.name],
      );
    }

    return this.formBuilder.group(schema, options);
  }

  castSchema() {
    const shape = {};

    this.fields.forEach((field) => {
      shape[field.name] = field.forFormCast();
    });

    return yup.object().shape(shape);
  }

  cast(values) {
    return this.castSchema().cast(values);
  }
}
