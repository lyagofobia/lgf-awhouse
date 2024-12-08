import { Component } from '@angular/core';
import { EventType, Router, RouterOutlet } from '@angular/router';
import { MenuService } from './core/menu/menu.service';
import { MenuItem } from './core/menu/menu-item';
import { LayoutModule } from './layout/layout.module';
import { filter } from 'rxjs';
import { layoutViewFadeAndZoomTrigger } from './animations/route-transitions/layout-view.trigger';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutModule],
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

  constructor(menu: MenuService, protected router: Router) {
    this.menuItems = menu.menuItems;
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
}
