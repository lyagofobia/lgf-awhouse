import { Component, Input } from '@angular/core';
import { MenuItem } from '../../core/menu/menu-item';
import { faBars, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { provideAnimations } from '@angular/platform-browser/animations';
import { sideBarCollapse, sideBarSectionCollapse } from '../../animations/sidebar-transitions/sidebar-collapse.triggers';

@Component({
  selector: 'lgf-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  animations: [
    sideBarSectionCollapse('sectionCollapse', { startHeight: '0px', endHeight: '*', timings: '150ms ease-out' })
    , sideBarCollapse('barCollapse', { startWidth: '280px', endWidth: '60px', timings: '250ms ease-out' })
  ],
  providers: [provideAnimations()]
})
export class SidebarComponent {

  icons = {
    faBars: faBars
    , faCaretRight: faCaretRight
  };

  @Input() xCollapse?: boolean = true;
  @Input() yCollapse?: boolean = false;
  @Input() menuItems?: MenuItem[] = [];
  @Input() config?: { style?: string, hideCollapseButton?: boolean };

  constructor() {
  }
}
