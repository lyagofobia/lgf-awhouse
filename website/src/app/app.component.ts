import { Component } from '@angular/core';
import { EventType, Router, RouterOutlet } from '@angular/router';
import { fadeIn } from './layout/animations/transitions.trigger';
import { MenuService } from './core/menu/menu.service';
import { MenuItem } from './core/menu/menu-item';
import { LayoutModule } from './layout/layout.module';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [fadeIn('routeTransition', { timing: 300 })]
})
export class AppComponent {
  menuItems: MenuItem[] = [];

  title?: string;
  path?: string[] = [];

  constructor(menu: MenuService, protected router: Router) {
    this.menuItems = menu.getMenu();
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
