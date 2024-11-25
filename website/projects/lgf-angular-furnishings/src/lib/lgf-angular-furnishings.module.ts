import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FurnishingListComponent } from '../lib/furnishing-list/furnishing-list.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
    , FurnishingListComponent
  ],
  exports: [
    FurnishingListComponent
  ]
})
export class LgfAngularFurnishingsModule { }
