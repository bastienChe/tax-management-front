import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {SidebarNavigationComponent} from "./core/sidebar-navigation/sidebar-navigation.component";
import {RouterModule} from "@angular/router";

@NgModule({
  bootstrap: [AppComponent, SidebarNavigationComponent],
  imports: [
    RouterModule
  ],// or whatever the name of the module is that declares your component.

  declarations: [AppComponent, SidebarNavigationComponent],
  providers: []
})
export class AppModule {}
