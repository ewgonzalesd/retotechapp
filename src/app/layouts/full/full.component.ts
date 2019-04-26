import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, AfterViewInit, OnInit } from '@angular/core';
import { MenuItems } from '../../shared/menu-items/menu-items';
import {ProgressBarService} from '../../actions/services/progress-bar.service';


/** @title Responsive sidenav */
@Component({
  selector: 'app-full-layout',
  templateUrl: 'full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnDestroy, AfterViewInit, OnInit {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  appConfig: any;
  progressBarMode: string;
  currentLang: string;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public menuItems: MenuItems,
              public progressBarService: ProgressBarService) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  ngAfterViewInit() {

  }

  ngOnInit() {

    this.progressBarService.updateProgressBar$.subscribe((mode: string) => {
      this.progressBarMode = mode;
    });
  }

}
