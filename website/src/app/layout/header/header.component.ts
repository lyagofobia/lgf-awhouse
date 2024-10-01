import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  userIcon: string = "fa fa-user";
  constructor(
  ) {
  }

  ngOnInit() {
  }

  toggleUserBlock(event: any) {
    event.preventDefault();
  }

  toggleOffsidebar() {
  }

  toggleCollapsedSideabar() {
  }

  isCollapsedText() {
  }

  toggleSettingsBar() {
  }
}
