import { Component } from '@angular/core';
import { MenuService } from '../core/menu/menu.service';
import { MenuItem } from '../core/menu/MenuItem';
import { LayoutModule } from './layout.module';
import { RouterModule, RouterOutlet } from '@angular/router';
import { RoutesModule } from '../routes/routes.module';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    LayoutModule,
    RoutesModule
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  menuItems: MenuItem[] = [];

  constructor(menu: MenuService) {
    this.menuItems = menu.getMenu();
  }

  ngOnInit() {
  }
}
