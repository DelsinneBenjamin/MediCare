import {
  DoctorService,
  init_doctor_service
} from "./chunk-LTBZ725A.js";
import "./chunk-XRM7BMAW.js";
import "./chunk-WUGIDABR.js";
import "./chunk-MXCFJN3J.js";
import "./chunk-47VIII2Y.js";
import {
  TestBed,
  init_testing
} from "./chunk-JYOIWBNR.js";

// src/app/core/services/doctor-service.spec.ts
init_testing();
init_doctor_service();
describe("DoctorService", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorService);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
//# sourceMappingURL=spec-doctor-service.spec.js.map
