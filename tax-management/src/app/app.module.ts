import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {SidebarNavigationComponent} from "./core/sidebar-navigation/sidebar-navigation.component";
import {RouterModule} from "@angular/router";
import {VatCreditModule} from "./components/vat-credit/vat-credit.module";

@NgModule({
  bootstrap: [AppComponent, SidebarNavigationComponent],
  imports: [
    RouterModule,
    VatCreditModule
  ],// or whatever the name of the module is that declares your component.
  declarations: [AppComponent, SidebarNavigationComponent],
  providers: []
})
export class AppModule {}
