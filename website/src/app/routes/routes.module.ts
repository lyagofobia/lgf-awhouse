import { NgModule } from "@angular/core";
import { MenuService } from "../core/menu/menu.service";
import { MENUS } from "./menus/default.menu";
import { OverviewComponent } from "./lgf-overview/overview.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";




@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
    CommonModule
    , RouterModule
  ],
  exports: [RouterModule]
})
export class RoutesModule {
  constructor(
    private menu: MenuService
  ) {
    this.menu.addMenu(MENUS);
  }
}
