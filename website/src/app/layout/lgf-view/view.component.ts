import { Component, Input } from '@angular/core';
import { faCaretRight, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { slide, swap } from './animations/header-change.trigger';
import { AnimationEvent } from '@angular/animations';
@Component({
  selector: 'lgf-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss',
  animations: [
    swap('routeTransition')
    , slide('slideIn', { timing: '500ms 200ms'})
    , slide('slideOut', { timing: '100ms', startWidth: '*', endWidth: '0px' })
  ],
})
export class ViewComponent {

  private _title?: string;
  protected newTitle?: string;
  protected oldTitle?: string;
  public get title(): string | undefined {
    return this._title;
  }
  @Input()
  public set title(value: string | undefined) {
    this.oldTitle = this._title;
    this._title = value;
  }
  @Input() path?: string[] = [];
  @Input()
  breadCrumbSeparator: IconDefinition = faCaretRight;

  constructor() {
  }
}
