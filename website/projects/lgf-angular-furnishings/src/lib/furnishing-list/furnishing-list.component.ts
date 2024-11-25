import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { LgfFurnishingListItem } from './models/furnishing-list-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lgf-furnishing-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './furnishing-list.component.html',
  styleUrl: './furnishing-list.component.scss'
})
export class FurnishingListComponent {

  @Input() listItems?: LgfFurnishingListItem[] = [];
  @Input() config?: { style?: string };
  @Input() xCollapse?: boolean = true;
  @Input() yCollapse?: boolean = false;
  @ContentChild('listHeadingTmp') listHeadingTmp?: TemplateRef<any>;
  @ContentChild('listItemTmp') listItemTmp?: TemplateRef<any>;

  constructor() {
  }
}
