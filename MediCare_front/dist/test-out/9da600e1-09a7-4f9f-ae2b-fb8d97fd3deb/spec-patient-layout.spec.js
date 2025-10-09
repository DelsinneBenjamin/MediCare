import {
  Component,
  TestBed,
  __async,
  __commonJS,
  __decorate,
  __esm,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-JYOIWBNR.js";

// angular:jit:template:src\app\Patient\components\patient-layout\patient-layout.html
var patient_layout_default;
var init_patient_layout = __esm({
  "angular:jit:template:src\\app\\Patient\\components\\patient-layout\\patient-layout.html"() {
    patient_layout_default = "<h1>Salut patient</h1>";
  }
});

// angular:jit:style:src\app\Patient\components\patient-layout\patient-layout.css
var patient_layout_default2;
var init_patient_layout2 = __esm({
  "angular:jit:style:src\\app\\Patient\\components\\patient-layout\\patient-layout.css"() {
    patient_layout_default2 = "/* src/app/Patient/components/patient-layout/patient-layout.css */\n/*# sourceMappingURL=patient-layout.css.map */\n";
  }
});

// src/app/Patient/components/patient-layout/patient-layout.ts
var PatientLayout;
var init_patient_layout3 = __esm({
  "src/app/Patient/components/patient-layout/patient-layout.ts"() {
    "use strict";
    init_tslib_es6();
    init_patient_layout();
    init_patient_layout2();
    init_core();
    PatientLayout = class PatientLayout2 {
    };
    PatientLayout = __decorate([
      Component({
        selector: "app-patient-layout",
        imports: [],
        template: patient_layout_default,
        styles: [patient_layout_default2]
      })
    ], PatientLayout);
  }
});

// src/app/Patient/components/patient-layout/patient-layout.spec.ts
var require_patient_layout_spec = __commonJS({
  "src/app/Patient/components/patient-layout/patient-layout.spec.ts"(exports) {
    init_testing();
    init_patient_layout3();
    describe("PatientLayout", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [PatientLayout]
        }).compileComponents();
        fixture = TestBed.createComponent(PatientLayout);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_patient_layout_spec();
//# sourceMappingURL=spec-patient-layout.spec.js.map
