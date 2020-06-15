import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeUntil, map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
  ];

  currentTheme = 'default';
  userMenu = [ { title: 'Profile' }, { title: 'Log out' } ];

  constructor(private themeService: NbThemeService) { }

  ngOnDestroy(): void {
    this.currentTheme = this.themeService.currentTheme;
    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar() {}

  navigateHome() {}

}
