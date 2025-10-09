import {
  UserService,
  init_user_service
} from "./chunk-XRM7BMAW.js";
import "./chunk-WUGIDABR.js";
import "./chunk-MXCFJN3J.js";
import "./chunk-47VIII2Y.js";
import {
  TestBed,
  init_testing
} from "./chunk-JYOIWBNR.js";

// src/app/core/services/user-service.spec.ts
init_testing();
init_user_service();
describe("UserService", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
//# sourceMappingURL=spec-user-service.spec.js.map
