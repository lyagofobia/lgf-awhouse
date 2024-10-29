import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'lgf-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent implements OnInit {

  title?: string;
  routePath?: string[];

  constructor(protected activatedRoute: ActivatedRoute) {
    this.title = activatedRoute.snapshot.title;
    this.routePath = activatedRoute.snapshot.url.map(segment => segment.path);
  }
  ngOnInit(): void {
  }

}
