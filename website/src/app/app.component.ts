import { Component, WritableSignal } from '@angular/core';
import { EventType, Router, RouterOutlet } from '@angular/router';
import { MenuService } from './core/menu/menu.service';
import { MenuItem } from './core/menu/menu-item';
import { LayoutModule } from './layout/layout.module';
import { filter } from 'rxjs';
import { layoutViewFadeAndZoomTrigger } from './animations/route-transitions/layout-view.trigger';
import { LgfAngularFurnishingsModule } from 'lgf-angular-furnishings';
import { LayoutService } from './layout/layout.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { ThemeService } from './core/theme/theme.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet
    , LayoutModule
    , LgfAngularFurnishingsModule
    , MatSidenavModule
    , MatListModule
    , MatButtonModule
    , FaIconComponent
    , MatSlideToggleModule
    , FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [layoutViewFadeAndZoomTrigger('routeTransition')]
})
export class AppComponent {
  /**
   * Menu items displayed on the sidebar for navigation.
   */
  menuItems: MenuItem[] = [];
  /**
   * Current Routed Page Title.
   */
  title?: string;
  /**
   * Current Routed Page Path.
   */
  path?: string[] = [];
  /**
   * Flags if user sidenav is opened.
   */
  userSideNavOpened: WritableSignal<boolean>;
  /**
   * Icons map for FaIconComponent.
   */
  icons = {
    faMoon: faMoon
  };

  constructor(protected router: Router, private menu: MenuService, private layout: LayoutService, private themeService: ThemeService) {
    this.menuItems = menu.menuItems;
    this.userSideNavOpened = this.layout.userSideNavOpened;

    this.router.events.pipe(filter(event => event.type == EventType.ActivationEnd)).subscribe(
      {
        next: (value) => {
          this.title = value.snapshot.title;
          this.path = value.snapshot.url.map(segment => segment.path);
        }
      }
    )
  }

  ngOnInit() {
  }

  darkThemeToggleChange(value: MatSlideToggleChange) {
    this.themeService.setDarkTheme(value.checked);
  }
}
