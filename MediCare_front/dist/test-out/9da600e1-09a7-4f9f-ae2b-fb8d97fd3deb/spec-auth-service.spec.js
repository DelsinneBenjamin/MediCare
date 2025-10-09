import {
  AuthService,
  init_auth_service
} from "./chunk-WUGIDABR.js";
import "./chunk-MXCFJN3J.js";
import "./chunk-47VIII2Y.js";
import {
  TestBed,
  init_testing
} from "./chunk-JYOIWBNR.js";

// src/app/core/services/auth-service.spec.ts
init_testing();
init_auth_service();
describe("AuthService", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
//# sourceMappingURL=spec-auth-service.spec.js.map
