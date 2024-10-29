import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RoutesModule } from "../routes/routes.module";
import { FooterComponent } from "./lgf-footer/footer.component";
import { HeaderComponent } from "./lgf-header/header.component";
import { SidebarComponent } from "./lgf-sidebar/sidebar.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ViewComponent } from "./lgf-view/view.component";




@NgModule({
  declarations: [
    HeaderComponent
    , SidebarComponent
    , ViewComponent
    , FooterComponent
  ],
  imports: [
    RoutesModule,
    FontAwesomeModule
  ],
  exports: [
    CommonModule
    , HeaderComponent
    , SidebarComponent
    , ViewComponent
    , FooterComponent
  ]
})
export class LayoutModule {
}
