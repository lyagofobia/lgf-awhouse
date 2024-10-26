import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RoutesModule } from "../routes/routes.module";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";




@NgModule({
  declarations: [
    FooterComponent
    , HeaderComponent
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
    , SidebarComponent
  ]
})
export class LayoutModule {
}
