import {
  Component,
  ChangeDetectorRef,
  OnInit,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit, OnDestroy {
  @ViewChild('snav', { static: true })
  snav;

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private authService: AuthService,
  ) {
    this.mobileQuery = media.matchMedia(
      '(max-width: 600px)',
    );
    this._mobileQueryListener = () =>
      changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  get opened() {
    if (!this.snav) {
      return false;
    }

    return this.snav.opened;
  }

  get logoUrl() {
    return this.authService.logoUrl;
  }

  ngOnInit(): void {
    if (!this.mobileQuery.matches) {
      this.snav.toggle();
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(
      this._mobileQueryListener,
    );
  }
}
