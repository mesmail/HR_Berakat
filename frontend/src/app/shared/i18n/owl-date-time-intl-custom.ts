import { OwlDateTimeIntl } from 'ng-pick-datetime';
import { i18n } from 'src/i18n';
import { Injectable } from "@angular/core";

// here is the default text string
@Injectable()
export class OwlDateTimeIntlCustom extends OwlDateTimeIntl {
  /** A label for the up second button (used by screen readers).  */
  upSecondLabel = i18n('datetime.upSecondLabel');

  /** A label for the down second button (used by screen readers).  */
  downSecondLabel = i18n('datetime.downSecondLabel');

  /** A label for the up minute button (used by screen readers).  */
  upMinuteLabel = i18n('datetime.upMinuteLabel');

  /** A label for the down minute button (used by screen readers).  */
  downMinuteLabel = i18n('datetime.downMinuteLabel');

  /** A label for the up hour button (used by screen readers).  */
  upHourLabel = i18n('datetime.upHourLabel');

  /** A label for the down hour button (used by screen readers).  */
  downHourLabel = i18n('datetime.downHourLabel');

  /** A label for the previous month button (used by screen readers). */
  prevMonthLabel = i18n('datetime.prevMonthLabel');

  /** A label for the next month button (used by screen readers). */
  nextMonthLabel = i18n('datetime.nextMonthLabel');

  /** A label for the previous year button (used by screen readers). */
  prevYearLabel = i18n('datetime.prevYearLabel');

  /** A label for the next year button (used by screen readers). */
  nextYearLabel = i18n('datetime.nextYearLabel');

  /** A label for the previous multi-year button (used by screen readers). */
  prevMultiYearLabel = i18n('datetime.prevMultiYearLabel');

  /** A label for the next multi-year button (used by screen readers). */
  nextMultiYearLabel = i18n('datetime.nextMultiYearLabel');

  /** A label for the 'switch to month view' button (used by screen readers). */
  switchToMonthViewLabel = i18n(
    'datetime.switchToMonthViewLabel',
  );

  /** A label for the 'switch to year view' button (used by screen readers). */
  switchToMultiYearViewLabel = i18n(
    'datetime.switchToMultiYearViewLabel',
  );

  /** A label for the cancel button */
  cancelBtnLabel = i18n('datetime.cancelBtnLabel');

  /** A label for the set button */
  setBtnLabel = i18n('datetime.setBtnLabel');

  /** A label for the range 'from' in picker info */
  rangeFromLabel = i18n('datetime.rangeFromLabel');

  /** A label for the range 'to' in picker info */
  rangeToLabel = i18n('datetime.rangeToLabel');

  /** A label for the hour12 button (AM) */
  hour12AMLabel = i18n('datetime.hour12AMLabel');

  /** A label for the hour12 button (PM) */
  hour12PMLabel = i18n('datetime.hour12PMLabel');
}
