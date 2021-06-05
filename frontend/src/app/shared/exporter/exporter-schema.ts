import * as yup from 'yup';

export class ExporterSchema {
  public yupSchema;
  public fields;

  constructor(fields) {
    this.fields = fields;
    this.yupSchema = this.buildSchema();
  }

  get labels() {
    return this.fields.map((field) => field.label);
  }

  labelOf(name) {
    const field = this.fields.find(
      (field) => field.name === name,
    );

    if (field) {
      return field.label;
    }

    return name;
  }

  buildSchema() {
    const shape = {};

    this.fields.forEach((field) => {
      shape[field.name] = field.forExport();
    });

    return yup
      .object()
      .shape(shape)
      .noUnknown(true);
  }

  cast(row) {
    return this.yupSchema.cast(row);
  }
}
