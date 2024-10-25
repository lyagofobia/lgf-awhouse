import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { fadeIn } from './routes/animations/transitions';
import { MenuService } from './core/menu/menu.service';
import { MenuItem } from './core/menu/MenuItem';
import { LayoutModule } from './layout/layout.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [fadeIn({ timing: 100 })],
})
export class AppComponent {
  title = 'website';

  menuItems: MenuItem[] = [];

  constructor(menu: MenuService, protected route: ActivatedRoute) {
    this.menuItems = menu.getMenu();
  }

  ngOnInit() {
  }
}
