import { NgModule } from "@angular/core";
import { MenuService } from "../core/menu/menu.service";
import { DEFAULT_MENU } from "./menus/default.menu";
import { LgfOverviewComponent } from "./lgf-overview/overview.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { LgfComponentsComponent } from "./lgf-components/components.component";

@NgModule({
  declarations: [
    LgfOverviewComponent
    , LgfComponentsComponent
  ],
  imports: [
    CommonModule
    , RouterModule
  ],
  exports: [CommonModule, RouterModule]
})
export class RoutesModule {
  constructor(
    private menu: MenuService
  ) {
    this.menu.addMenu(DEFAULT_MENU);
  }
}
