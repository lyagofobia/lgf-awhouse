import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'lgf-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    standalone: false
})
export class HeaderComponent implements OnInit {

  routePath: string[] = [];

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }
}
