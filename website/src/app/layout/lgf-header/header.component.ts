import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'lgf-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: false
})
export class HeaderComponent implements OnInit {

  routePath: string[] = [];
  icons = {
    faUser: faUser
  };

  constructor(
    private router: Router, private layout: LayoutService
  ) {
  }

  ngOnInit() {
  }

  userButtonClick() {
    this.layout.toggleUserSideNav();
  }
}
