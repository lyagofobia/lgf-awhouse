import { Component, Input } from '@angular/core';
import { MenuItem } from '../../core/menu/menu-item';
import { faBars, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { provideAnimations } from '@angular/platform-browser/animations';
import { shift, slide } from './animations/collapse.trigger';

@Component({
  selector: 'lgf-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  animations: [slide({ timing: '360ms 100ms ease-out' }), shift({ timing: '360ms 100ms ease-out' })],
  providers: [provideAnimations()]
})
export class SidebarComponent {

  icons = {
    faBars: faBars
    , faCaretRight: faCaretRight
  };

  @Input() collapse?: boolean = true;
  @Input() menuItems?: MenuItem[] = [];
  @Input() config?: {style?: string, hideCollapseButton?: boolean};

  constructor() {
  }
}
