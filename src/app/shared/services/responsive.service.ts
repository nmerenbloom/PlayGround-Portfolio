import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';

type screenSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

@Injectable({ providedIn: 'root' })
export class ResponsiveService {

  // tslint:disable-next-line:variable-name
  private _windowWidthSource = new BehaviorSubject<number>(window.innerWidth);
  windowWidth$ = this._windowWidthSource.asObservable().pipe(
    distinctUntilChanged(),
    debounceTime(100)
  );

  isMobile$: Observable<boolean>;
  isTablet$: Observable<boolean>;

  // Bootstrap breakpoints
  widths = {
    xs: {
      min: 0,
      max: 575.98
    },
    sm: {
      min: 576,
      max: 767.98
    },
    md: {
      min: 768,
      max: 991.98
    },
    lg: {
      min: 992,
      max: 1199.98
    },
    xl: {
      min: 1200,
      max: 9999
    }
  };

  constructor() {
    window.addEventListener('resize', () => {
      this.announceWindowWidth(window.innerWidth);
    });
    this.isMobile$ = this.windowWidth$.pipe(map(() => {
      return !this.breakpointUp('sm');
    }), distinctUntilChanged());
    this.isTablet$ = this.windowWidth$.pipe(map(() => !this.breakpointUp('md')), distinctUntilChanged());
  }

  announceWindowWidth(width: number): void {
    this._windowWidthSource.next(width);
  }

  breakpointUp(size: screenSizes): boolean {
    // Is the current width larger than the specified breakpoint minimum.
    return this._windowWidthSource.value >= this.widths[size].min;
  }

  getScreenSize(sizeString: screenSizes): number {
    return this.widths[sizeString].max;
  }

  getScreenSizeString(): string {
    const winWidth = this._windowWidthSource.value;

    if (winWidth >= this.widths.xl.min) {
      return 'xl';
    } else if (winWidth >= this.widths.lg.min && winWidth < this.widths.lg.max) {
      return 'lg';
    } else if (winWidth >= this.widths.md.min && winWidth < this.widths.md.max) {
      return 'md';
    } else if (winWidth >= this.widths.sm.min && winWidth < this.widths.sm.max) {
      return 'sm';
    } else if (winWidth <= this.widths.xs.max) {
      return 'xs';
    }
  }
}
