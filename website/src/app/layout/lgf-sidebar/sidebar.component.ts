import { Component, Input } from '@angular/core';
import { MenuItem } from '../../core/menu/menu-item';
import { faBars, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { provideAnimations } from '@angular/platform-browser/animations';
import { sideBarXCollapse } from '../../animations/sidebar-transitions/sidebar-collapse.trigger';
import { menuCollapseAndFadeLeft } from '../../animations/menu-entrances/menu-collapse-and-fade-left.trigger';
/**
 * Implements the Website's Sidebar. It provides some inputs to set collapse states, 
 * menu items and syle.
 */
@Component({
    selector: 'lgf-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
    animations: [
        menuCollapseAndFadeLeft('sectionCollapse'),
        sideBarXCollapse('barCollapse')
    ],
    providers: [provideAnimations()],
    standalone: false
})
export class SidebarComponent {
  icons = {
    faBars: faBars
    , faCaretRight: faCaretRight
  };
  /**
   * Flags if the menu is collapsed horizontally.
   */
  @Input() xCollapse?: boolean = false;
  /**
   * Flags if the menu is collapsed vertically.
   */
  @Input() yCollapse?: boolean = false;
  /**
   * Menu items. Defined by [`MenuItem`](../../menu/menu-item.d.ts).
   */
  @Input() menuItems?: MenuItem[] = [];
  /**
   * Sidebar configurations.
   */
  @Input() config?: { style?: string };

  constructor() {
  }
}
