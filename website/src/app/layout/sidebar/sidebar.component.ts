import { Component, Input } from '@angular/core';
import { MenuItem } from '../../core/menu/MenuItem';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  @Input() menuItems: MenuItem[] = [];

  constructor() {
    
  }
}
