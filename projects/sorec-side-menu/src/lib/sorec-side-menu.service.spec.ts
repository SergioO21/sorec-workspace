import { TestBed } from "@angular/core/testing";

import { SorecSideMenuService } from "./sorec-side-menu.service";

describe("SorecSideMenuService", () => {
  let service: SorecSideMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SorecSideMenuService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
