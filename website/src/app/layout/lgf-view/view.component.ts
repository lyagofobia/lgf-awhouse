import { Component, Input } from '@angular/core';
import { faCaretRight, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { swapLeft } from '../animations/transitions.trigger';

const DEFAULT_BREAD_CRUMB_SEPARATOR = faCaretRight;

@Component({
  selector: 'lgf-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss',
  animations: [swapLeft({ timing: '1s ease-in' })],
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

  protected oldTitle?: string | undefined;
  private _title?: string | undefined;
  public get title(): string | undefined {
    return this._title;
  }
  @Input()
  public set title(value: string | undefined) {
    this.oldTitle = this._title;
    this._title = value;
  }
  @Input() path?: string[] = [];

  constructor() {
  }
}
