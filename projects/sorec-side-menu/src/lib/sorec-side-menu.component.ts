import { Component, input, output } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { NgClass } from "@angular/common";

export enum TitleColor {
  blue = "text-blue-500",
  green = "text-green-500",
  purple = "text-purple-500",
  red = "text-red-500",
}

@Component({
  selector: "lib-sorec-side-menu",
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: "./sorec-side-menu.component.html",
  styles: ``,
})
export class SorecSideMenuComponent {
  isAuth = input(false);

  title = input<string>("SOREC");
  subtitle = input<string>("Corp");

  titleColor = input<TitleColor>(TitleColor.purple);

  signOut = output();
  signIn = output();
}
