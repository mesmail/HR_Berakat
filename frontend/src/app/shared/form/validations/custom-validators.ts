import {
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';
import * as moment from 'moment';

export class CustomValidators {
  static integer(): ValidatorFn {
    return (
      control: AbstractControl,
    ): { [key: string]: any } => {
      const value = control.value;

      if (!value) {
        return null;
      }

      if (
        parseFloat(value) === parseInt(value, 10) &&
        !isNaN(value)
      ) {
        return null;
      } else {
        return { integer: true };
      }
    };
  }

  static numberRange(): ValidatorFn {
    return (
      control: AbstractControl,
    ): { [key: string]: any } => {
      const value = control.value;

      if (!value) {
        return null;
      }

      if (
        value
          .filter((item) => Boolean(item))
          .some((item) => isNaN(item))
      ) {
        return { number: true };
      }

      return null;
    };
  }

  static integerRange(): ValidatorFn {
    return (
      control: AbstractControl,
    ): { [key: string]: any } => {
      const value = control.value;

      if (!value) {
        return null;
      }

      if (
        value
          .filter((item) => Boolean(item))
          .some(
            (item) =>
              parseFloat(item) !== parseInt(item, 10) ||
              isNaN(item),
          )
      ) {
        return { integer: true };
      }

      return null;
    };
  }

  static number(): ValidatorFn {
    return (
      control: AbstractControl,
    ): { [key: string]: any } => {
      const value = control.value;

      if (!value) {
        return null;
      }

      if (!isNaN(value)) {
        return null;
      } else {
        return { number: true };
      }
    };
  }

  static min(arg: number): ValidatorFn {
    return (
      control: AbstractControl,
    ): { [key: string]: any } => {
      const value = control.value;
      if (!value) {
        return null;
      }

      if (value < arg) {
        return {
          min: { requiredValue: arg, actualValue: value },
        };
      }

      return null;
    };
  }

  static max(arg: number): ValidatorFn {
    return (
      control: AbstractControl,
    ): { [key: string]: any } => {
      const value = control.value;

      if (!value) {
        return null;
      }

      if (value > arg) {
        return {
          max: { requiredValue: arg, actualValue: value },
        };
      }

      return null;
    };
  }

  static minArrayLength(arg: number): ValidatorFn {
    return (
      control: AbstractControl,
    ): { [key: string]: any } => {
      const value = control.value;

      if (!value || !Array.isArray(value)) {
        return null;
      }

      if (value.length < arg) {
        return {
          minArrayLength: {
            requiredValue: arg,
            actualValue: value,
          },
        };
      }

      return null;
    };
  }

  static maxArrayLength(arg: number): ValidatorFn {
    return (
      control: AbstractControl,
    ): { [key: string]: any } => {
      const value = control.value;

      if (!value || !Array.isArray(value)) {
        return null;
      }

      if (value.length > arg) {
        return {
          maxArrayLength: {
            requiredValue: arg,
            actualValue: value,
          },
        };
      }

      return null;
    };
  }

  static datetime() {
    return (
      control: AbstractControl,
    ): { [key: string]: any } => {
      const value = control.value;

      if (!value) {
        return null;
      }

      const valid = moment(value).isValid();
      return !valid ? { datetime: { value } } : null;
    };
  }

  static date() {
    return (
      control: AbstractControl,
    ): { [key: string]: any } => {
      const value = control.value;

      if (!value) {
        return null;
      }

      const valid = moment(
        value,
        'YYYY-MM-DD',
        true,
      ).isValid();
      return !valid ? { date: { value } } : null;
    };
  }

  static autocompleteRequired(): ValidatorFn {
    return (
      control: AbstractControl,
    ): { [key: string]: any } => {
      const value = control.value;
      if (!value || !value.id) {
        return { required: true };
      }

      return null;
    };
  }

  static autocompleteMultipleRequired(): ValidatorFn {
    return (
      control: AbstractControl,
    ): { [key: string]: any } => {
      const value = control.value;
      if (!value || !value.length) {
        return { required: true };
      }

      return null;
    };
  }
}
