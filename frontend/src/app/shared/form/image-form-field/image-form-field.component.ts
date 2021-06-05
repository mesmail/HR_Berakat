import {
  Component,
  forwardRef,
  Input,
  ViewChild,
  ElementRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { FileUploader } from 'src/app/shared/file-upload/file-uploader';
import { ErrorService } from 'src/app/shared/error/error.service';

@Component({
  selector: 'app-image-form-field',
  templateUrl: './image-form-field.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(
        () => ImageFormFieldComponent,
      ),
      multi: true,
    },
  ],
})
export class ImageFormFieldComponent
  implements ControlValueAccessor {
  @Input() submitted = false;
  @Input('formControl') control;
  @Input() label;
  @Input() required = false;
  @Input('value') _value = [];
  @Input('storage') storage;
  @Input('max') max;
  @Input() hint;

  onChange: any = () => {};
  onTouched: any = () => {};
  disabled = false;
  loading = false;
  localError = null;

  @ViewChild('fileInput', { static: true })
  fileInput: ElementRef;

  constructor(private errorService: ErrorService) {}

  async add(event: any) {
    try {
      this.localError = null;

      const files = event.target.files;

      if (!files || !files.length) {
        return;
      }

      let file = files[0];

      FileUploader.validate(file, {
        storage: this.storage,
        image: true,
      });

      this.loading = true;

      file = await FileUploader.upload(file, {
        storage: this.storage,
        image: true,
      });

      this.value = [...this._value, file];
      this.loading = false;
      this.fileInput.nativeElement.value = '';
    } catch (error) {
      this.loading = false;
      console.error(error);
      this.localError = this.errorService.selectMessage(
        error,
      );
      this.fileInput.nativeElement.value = '';
    }
  }

  async remove(id: string) {
    this.value = this.value.filter(
      (item) => item.id !== id,
    );
  }

  get value() {
    return this._value;
  }

  get isFull() {
    return this.max && this.value.length >= this.max;
  }

  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  writeValue(value) {
    this.value = value || [];
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = Boolean(isDisabled);
  }
}
