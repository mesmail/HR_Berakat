import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-tag-form-field',
  templateUrl: './tag-form-field.component.html',
})
export class TagFormFieldComponent {
  @Input()
  control: FormControl;
  @Input()
  label: string;
  @Input()
  appAutofocus = false;
  @Input()
  required = false;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.control.setValue([
        ...(this.control.value || []),
        value.trim(),
      ]);
    }

    if (input) {
      input.value = '';
    }
  }

  remove(value): void {
    this.control.setValue([
      ...(this.control.value || []).filter(
        (v) => v !== value,
      ),
    ]);
  }
}
