import { Component, Input } from '@angular/core';
import { EventType, Router } from '@angular/router';
import { faCaretRight, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { filter } from 'rxjs';
import { fadeIn } from '../animations/transitions.trigger';

const DEFAULT_BREAD_CRUMB_SEPARATOR = faCaretRight;

@Component({
  selector: 'lgf-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss',
  animations: [fadeIn({ timing: 300 })],
})
export class ViewComponent {

  private _breadCrumbSeparator = DEFAULT_BREAD_CRUMB_SEPARATOR;

  protected get breadCrumbSeparator() {
    return this._breadCrumbSeparator;
  }
  @Input()
  protected set breadCrumbSeparator(value: IconDefinition) {
    if (value)
      this._breadCrumbSeparator = value;
  }

  @Input() title?: string;
  @Input() path?: string[] = [];

  constructor(protected router: Router) {
    this.router.events.pipe(filter(event => event.type == EventType.ActivationEnd)).subscribe(
      {
        next: (value) => {
          this.title = value.snapshot.title;
          this.path =  value.snapshot.url.map(segment => segment.path);
        }
      }
    )
  }
}
