import {
  Injectable,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-JYOIWBNR.js";

// src/app/core/services/patient-service.spec.ts
init_testing();

// src/app/core/services/patient-service.ts
init_tslib_es6();
init_core();
var PatientService = class PatientService2 {
};
PatientService = __decorate([
  Injectable({
    providedIn: "root"
  })
], PatientService);

// src/app/core/services/patient-service.spec.ts
describe("PatientService", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientService);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
//# sourceMappingURL=spec-patient-service.spec.js.map
