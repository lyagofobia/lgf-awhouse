import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RoutesModule } from "../routes/routes.module";
import { FooterComponent } from "./lgf-footer/footer.component";
import { HeaderComponent } from "./lgf-header/header.component";
import { SidebarComponent } from "./lgf-sidebar/sidebar.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ViewComponent } from "./lgf-view/view.component";
import { LgfAngularFurnishingsModule } from 'lgf-angular-furnishings'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatButtonModule } from '@angular/material/button'
@NgModule({
  declarations: [
    HeaderComponent
    , SidebarComponent
    , ViewComponent
    , FooterComponent
  ],
  imports: [
    RoutesModule,
    FontAwesomeModule,
    LgfAngularFurnishingsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatExpansionModule,
    MatButtonModule
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
