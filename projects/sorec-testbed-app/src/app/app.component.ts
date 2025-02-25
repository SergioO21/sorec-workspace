import { Component, signal } from "@angular/core";
import { SorecSideMenuComponent, TitleColor } from "sorec-side-menu";

@Component({
  selector: "app-root",
  imports: [SorecSideMenuComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  protected readonly TitleColor = TitleColor;
  title = "sorec-testbed-app";

  isAuth = signal(false);

  onLogin() {
    this.isAuth.set(true);
  }

  onLogout() {
    this.isAuth.set(false);
  }
}
