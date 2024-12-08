import { Component, Input } from '@angular/core';
import { faCaretRight, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { layoutViewSequenceCollapse } from '../../animations/route-transitions/layout-view.trigger';
@Component({
  selector: 'lgf-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss',
  animations: layoutViewSequenceCollapse('routeTransition',
    {
      selector: 'collapseOut'
      , config: { timings: '100ms', startWidth: '*', endWidth: '0px' }
    }
    ,
    {
      selector: 'collapseIn'
      , config: { timings: '500ms 150ms' }
    }
  )
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
