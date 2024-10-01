import { Injectable } from '@angular/core';
import { MenuItem } from './MenuItem';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuItems: MenuItem[];

  constructor() {
      this.menuItems = [];
  }

  /**
   * Adiciona os items ao menu.
   * @param items Items do menu.
   */
  addMenu(items: MenuItem[]) {
      items.forEach((item) => {
          // if (!this.menuItems.includes(item))
              this.menuItems.push(item);
      });
  }

  /**
   * Obtém o menu.
   * @returns Array contendo os itens menu.
   */
  getMenu() {
      return this.menuItems;
  }
}
