import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  userSideNavOpened: WritableSignal<boolean> = signal(false);

  constructor() { }

  toggleUserSideNav() {
    this.userSideNavOpened.set(!this.userSideNavOpened());
  }
}
