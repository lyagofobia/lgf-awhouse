import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RoutesModule } from "../routes/routes.module";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { OffsidebarComponent } from "./offsidebar/offsidebar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";




@NgModule({
  declarations: [
    FooterComponent
    , HeaderComponent
    , OffsidebarComponent
    , SidebarComponent
  ],
  imports: [
    CommonModule,
    RoutesModule,
    FontAwesomeModule
  ],
  exports: [
    CommonModule
    , FooterComponent
    , HeaderComponent
    , OffsidebarComponent
    , SidebarComponent
  ]
})
export class LayoutModule {
}
