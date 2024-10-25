import { Component, Input } from '@angular/core';
import { MenuItem } from '../../core/menu/MenuItem';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { shift, slide } from './animations/collapse';
import { provideAnimations } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  animations: [slide({ timing: '360ms 100ms ease-out' }), shift({ timing: '360ms 100ms ease-out' })],
  providers: [provideAnimations()]
})
export class SidebarComponent {

  icons = {
    faBars: faBars
  };

  collapse = true;

  @Input() menuItems: MenuItem[] = [];

  constructor() {
  }
}
