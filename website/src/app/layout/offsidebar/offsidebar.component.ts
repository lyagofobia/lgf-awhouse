import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from '../../core/menu/MenuItem';
import { faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-offsidebar',
  templateUrl: './offsidebar.component.html',
  styleUrl: './offsidebar.component.scss'
})
export class OffsidebarComponent {
  icons = {
    faCog: faCog
  };

  collapse = true

  @Input() menuItems: MenuItem[] = [];
  @Output() onCollapse: EventEmitter<void> = new EventEmitter<void>();

  constructor() {

  }
}
