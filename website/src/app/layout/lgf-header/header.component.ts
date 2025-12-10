import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { LayoutService } from '../layout.service';
import { ThemeService } from '../../core/theme/theme.service';
import { Theme } from '../../core/theme/themes';

@Component({
  selector: 'lgf-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: false
})
export class HeaderComponent {
  readonly layout = inject(LayoutService);
  readonly theme = inject(ThemeService);

  readonly imgPath = computed(() => this.theme.currentTheme() == Theme.dark ?
    '../../../assets/img/logo-light.png' :
    '../../../assets/img/logo-dark.png'
  );

  icons = {
    faUser: faUser
  };

  userButtonClick() {
    this.layout.toggleUserSideNav();
  }
}
