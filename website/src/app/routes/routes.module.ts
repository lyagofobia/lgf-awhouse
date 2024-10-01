import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MenuService } from "../core/menu/menu.service";
import { MENUS } from "./menus/menu";
import { OverviewComponent } from "./overview/overview.component";




@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
    RouterModule,
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
