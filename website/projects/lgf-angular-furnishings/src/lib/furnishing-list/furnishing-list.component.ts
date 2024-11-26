import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { LgfFurnishingListItem } from './models/furnishing-list-item';
import { CommonModule } from '@angular/common';
import { LgfTriggers } from 'lgf-angular-cinema';

@Component({
  selector: 'lgf-furnishing-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './furnishing-list.component.html',
  styleUrl: './furnishing-list.component.scss',
  animations: [LgfTriggers.openClosedYCollapseAndZoom('sectionCollapse', { startHeight: '0px', endHeight: '*', timings: '150ms ease-out' })]
})
export class FurnishingListComponent {

  @Input() listItems?: LgfFurnishingListItem[] = [];
  @Input() config?: { style?: string };
  @Input() collapse?: boolean = false;
  @ContentChild('listHeadingTmp') listHeadingTmp?: TemplateRef<any>;
  @ContentChild('listItemTmp') listItemTmp?: TemplateRef<any>;

  constructor() {
  }
}
