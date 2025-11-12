import { Injectable, signal } from '@angular/core';
import { Theme } from './themes';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  readonly currentTheme = signal<Theme>(Theme.dark);
  constructor() {
    this.setTheme(this.getFromLocalStorage());
  }

  toggleTheme(value: boolean = true) {
    this.setTheme(value ? Theme.dark : Theme.light);
  }
  setTheme(theme: Theme) {
    this.currentTheme.set(theme);
    if (theme == Theme.dark) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
    this.setInLocalStorage(theme);
  }
  setInLocalStorage(theme: Theme) {
    debugger
    localStorage.setItem('preferred-theme', Theme[theme]);
  }
  getFromLocalStorage(): Theme {
    return Theme[(localStorage.getItem('preferred-theme') ?? Theme[Theme.dark]) as keyof typeof Theme];
  }
}
