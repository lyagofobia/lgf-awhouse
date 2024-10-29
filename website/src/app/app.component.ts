import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { fadeIn } from './layout/animations/transitions.trigger';
import { MenuService } from './core/menu/menu.service';
import { MenuItem } from './core/menu/menu-item.model';
import { LayoutModule } from './layout/layout.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [fadeIn({ timing: 300 })],
})
export class AppComponent {
  menuItems: MenuItem[] = [];

  constructor(menu: MenuService, protected activedRoute: ActivatedRoute) {
    this.menuItems = menu.getMenu();
  }

  ngOnInit() {
  }
}
