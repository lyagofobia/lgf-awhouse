import { Injectable } from '@angular/core';
import { MenuItem } from './menu-item';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuItems: MenuItem[];

  constructor() {
    this.menuItems = [];
  }

  /**
   * Add items to menu
   * @param items items.
   */
  addMenu(items: MenuItem[]) {
    this.menuItems = items.map(item => item);
  }
}
