import * as yup from 'yup';
import { values as _values } from 'lodash';

export class FilterSchema {
  fields: any[];
  formBuilder: any;

  constructor(fields, formBuilder) {
    this.fields = fields;
    this.formBuilder = formBuilder;
  }

  buildForm(record = {}, queryParams = {}) {
    queryParams = queryParams || {};
    record = record || {};

    const hasFilterFromQuery = _values(
      queryParams,
    ).some((filterValue) => Boolean(filterValue));

    if (hasFilterFromQuery) {
      record = queryParams;
    }

    const schema = {};

    for (const field of this.fields) {
      schema[field.name] = field.forFilterControl(
        record[field.name],
      );
    }

    return this.formBuilder.group(schema);
  }

  castSchema() {
    const shape = {};

    this.fields.forEach((field) => {
      shape[field.name] = field.forFilterCast();
    });

    return yup.object().shape(shape);
  }

  cast(values) {
    return this.castSchema().cast(values);
  }
}
