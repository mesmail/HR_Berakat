import {
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material.module';
import { ValidationsComponent } from 'src/app/shared/form/validations/validations.component';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { AutofocusDirective } from 'src/app/shared/form/autofocus/autofocus.directive';
import { I18nModule } from 'src/app/shared/i18n/i18n.module';
import { AvatarComponent } from 'src/app/shared/avatar/avatar.component';
import { BreadcrumbComponent } from 'src/app/shared/breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MAT_PAGINATOR_INTL_PROVIDER_FACTORY } from 'src/app/shared/i18n/mat-paginator-intl';
import { TagFormFieldComponent } from 'src/app/shared/form/tag-form-field/tag-form-field.component';
import { DateTimeRangeInputComponent } from 'src/app/shared/form/date-time-range-input/date-time-range-input.component';
import { TableTdCheckboxComponent } from 'src/app/shared/table/checkbox/table-td-checkbox.component';
import { TableThCheckboxComponent } from 'src/app/shared/table/checkbox/table-th-checkbox.component';
import { ImageFormFieldComponent } from 'src/app/shared/form/image-form-field/image-form-field.component';
import { ViewItemTextComponent } from 'src/app/shared/view/view-item-text.component';
import { ViewItemImagesComponent } from 'src/app/shared/view/view-item-images.component';
import { ViewItemCustomComponent } from 'src/app/shared/view/view-item-custom.component';
import { ImporterModule } from 'src/app/shared/importer/importer.module';
import { ConfirmModule } from 'src/app/shared/confirm/confirm.module';
import { FileFormFieldComponent } from 'src/app/shared/form/file-form-field/file-form-field.component';
import { ViewItemFilesComponent } from 'src/app/shared/view/view-item-files.component';
import { TableItemFilesComponent } from 'src/app/shared/table/table-item-files.component';
import { DecimalRangeInputComponent } from 'src/app/shared/form/decimal-range-input/decimal-range-input.component';
import { DateRangeInputComponent } from 'src/app/shared/form/date-range-input/date-range-input.component';
import { IntegerRangeInputComponent } from 'src/app/shared/form/integer-range-input/integer-range-input.component';
import { AutocompleteFormFieldComponent } from 'src/app/shared/form/autocomplete-form-field/autocomplete-form-field.component';
import { ViewItemRelationToOneComponent } from 'src/app/shared/view/view-item-relation-to-one.component';
import { TableItemRelationToOneComponent } from 'src/app/shared/table/table-item-relation-to-one.component';
import { TableItemRelationToManyComponent } from 'src/app/shared/table/table-item-relation-to-many.component';
import { AutocompleteMultipleFormFieldComponent } from 'src/app/shared/form/autocomplete-multiple-form-field/autocomplete-multiple-form-field.component';
import { ViewItemRelationToManyComponent } from 'src/app/shared/view/view-item-relation-to-many.component';
import { TableItemImagesComponent } from 'src/app/shared/table/table-item-images.component';
import {
  OwlDateTimeModule,
  OwlNativeDateTimeModule,
  OwlDateTimeIntl,
  OWL_DATE_TIME_LOCALE,
} from 'ng-pick-datetime';
import { OwlDateTimeIntlCustom } from 'src/app/shared/i18n/owl-date-time-intl-custom';
import { getLanguage } from 'src/i18n';
import { FilterPreviewComponent } from 'src/app/shared/filter/filter-preview.component';

@NgModule({
  declarations: [
    ValidationsComponent,
    AutofocusDirective,
    AvatarComponent,
    BreadcrumbComponent,
    ImageFormFieldComponent,
    FileFormFieldComponent,
    TagFormFieldComponent,
    TableTdCheckboxComponent,
    TableThCheckboxComponent,
    ViewItemTextComponent,
    ViewItemImagesComponent,
    ViewItemCustomComponent,
    ViewItemFilesComponent,
    TableItemFilesComponent,
    DateTimeRangeInputComponent,
    DateRangeInputComponent,
    DecimalRangeInputComponent,
    IntegerRangeInputComponent,
    AutocompleteFormFieldComponent,
    AutocompleteMultipleFormFieldComponent,
    ViewItemRelationToOneComponent,
    TableItemRelationToOneComponent,
    ViewItemRelationToManyComponent,
    TableItemRelationToManyComponent,
    TableItemImagesComponent,
    FilterPreviewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    I18nModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ImporterModule,
    ConfirmModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ImporterModule,
    ConfirmModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ValidationsComponent,
    AutofocusDirective,
    I18nModule,
    AvatarComponent,
    BreadcrumbComponent,
    ImageFormFieldComponent,
    FileFormFieldComponent,
    TagFormFieldComponent,
    TableTdCheckboxComponent,
    TableThCheckboxComponent,
    ViewItemTextComponent,
    ViewItemImagesComponent,
    ViewItemCustomComponent,
    ViewItemFilesComponent,
    TableItemFilesComponent,
    DateTimeRangeInputComponent,
    DateRangeInputComponent,
    DecimalRangeInputComponent,
    IntegerRangeInputComponent,
    AutocompleteFormFieldComponent,
    AutocompleteMultipleFormFieldComponent,
    ViewItemRelationToOneComponent,
    TableItemRelationToOneComponent,
    ViewItemRelationToManyComponent,
    TableItemRelationToManyComponent,
    TableItemImagesComponent,
    FilterPreviewComponent,
  ],
  providers: [
    {
      provide: MatPaginatorIntl,
      deps: [
        [new Optional(), new SkipSelf(), MatPaginatorIntl],
      ],
      useFactory: MAT_PAGINATOR_INTL_PROVIDER_FACTORY,
    },
    {
      provide: OwlDateTimeIntl,
      useClass: OwlDateTimeIntlCustom,
    },
    {
      provide: OWL_DATE_TIME_LOCALE,
      useValue: getLanguage().owlDateTimeLocale,
    },
  ],
})
export class SharedModule {}
