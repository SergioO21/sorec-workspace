import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SorecSideMenuComponent } from "./sorec-side-menu.component";
import { provideRouter } from "@angular/router";

describe("SorecSideMenuComponent", () => {
  let component: SorecSideMenuComponent;
  let fixture: ComponentFixture<SorecSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SorecSideMenuComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(SorecSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Should call onSignIn when button is clicked", () => {
    spyOn(component.signIn, "emit");
    fixture.componentRef.setInput("isAuth", false);
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector(
      "[data-login]"
    ) as HTMLButtonElement;
    expect(button).toBeTruthy();

    button.click();
    expect(component.signIn.emit).toHaveBeenCalled();
  });

  it("Should call onSignOut when button is clicked", () => {
    spyOn(component.signOut, "emit");
    fixture.componentRef.setInput("isAuth", true);
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector(
      "[data-logout]"
    ) as HTMLButtonElement;
    expect(button).toBeTruthy();

    button.click();
    expect(component.signOut.emit).toHaveBeenCalled();
  });
});
