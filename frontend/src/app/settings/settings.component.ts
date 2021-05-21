import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { SettingsService } from 'src/app/settings/settings.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SettingsModel } from 'src/app/settings/settings-model';
import { FormSchema } from 'src/app/shared/form/form-schema';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {
  form: FormGroup;
  schema: FormSchema;

  constructor(
    private settingsService: SettingsService,
    private formBuilder: FormBuilder,
  ) {}

  async ngOnInit() {
    await this.settingsService.doInit();
    this.buildSchema();
    this.doReset();
  }

  get fields() {
    return SettingsModel.fields;
  }

  get initLoading() {
    return this.settingsService.initLoading;
  }

  get saveLoading() {
    return this.settingsService.saveLoading;
  }

  get primaryColorOptions() {
    return this.fields.primaryColor.options.filter(
      (option) =>
        option.id !== this.form.value.secondaryColor,
    );
  }

  get secondaryColorOptions() {
    return this.fields.secondaryColor.options.filter(
      (option) =>
        option.id !== this.form.value.primaryColor,
    );
  }

  doSave() {
    if (!this.form.valid) {
      return;
    }

    return this.settingsService.doSave({
      ...this.form.value,
      theme: `${this.form.value.primaryColor}-${this.form.value.secondaryColor}`,
    });
  }

  doReset() {
    const theme = this.settingsService.settings.theme;
    if (theme && theme !== 'default') {
      this.form = this.schema.buildForm({
        ...this.settingsService.settings,
        primaryColor: theme.split('-')[0],
        secondaryColor: theme.split('-')[1],
      });
    } else {
      this.form = this.schema.buildForm({
        ...(this.settingsService.settings || {}),
        primaryColor: 'light_blue',
        secondaryColor: 'pink',
      });
    }
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('settings.title')],
  ];

  classForColor(color) {
    return {
      ['settings-box']: true,
      [color]: true,
    };
  }

  private buildSchema() {
    this.schema = new FormSchema(
      [
        this.fields.primaryColor,
        this.fields.secondaryColor,
        this.fields.logos,
        this.fields.backgroundImages,
      ],
      this.formBuilder,
    );
  }
}
