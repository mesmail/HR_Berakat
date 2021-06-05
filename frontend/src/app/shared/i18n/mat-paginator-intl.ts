import { MatPaginatorIntl } from '@angular/material/paginator';
import { i18n } from 'src/i18n';

export function MAT_PAGINATOR_INTL_PROVIDER_FACTORY(
  parentIntl: MatPaginatorIntl,
): MatPaginatorIntl {
  let intl: MatPaginatorIntl;
  if (!parentIntl) {
    intl = new MatPaginatorIntl();
  } else {
    intl = parentIntl;
  }
  intl.itemsPerPageLabel = i18n(
    'paginator.itemsPerPageLabel',
  );
  intl.nextPageLabel = i18n('paginator.nextPageLabel');
  intl.previousPageLabel = i18n(
    'paginator.previousPageLabel',
  );
  intl.firstPageLabel = i18n('paginator.firstPageLabel');
  intl.lastPageLabel = i18n('paginator.lastPageLabel');
  intl.getRangeLabel = (
    page: number,
    pageSize: number,
    length: number,
  ) => {
    if (length == 0 || pageSize == 0) {
      return i18n('paginator.getRangeLabel.zero', length);
    }

    length = Math.max(length, 0);

    const startIndex = page * pageSize;

    const endIndex =
      startIndex < length
        ? Math.min(startIndex + pageSize, length)
        : startIndex + pageSize;

    return i18n(
      'paginator.getRangeLabel.interval',
      startIndex + 1,
      endIndex,
      length,
    );
  };
  return intl;
}
