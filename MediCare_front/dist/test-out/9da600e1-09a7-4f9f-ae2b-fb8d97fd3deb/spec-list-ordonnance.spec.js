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

// angular:jit:template:src\app\Patient\components\list-ordonnance\list-ordonnance.html
var list_ordonnance_default;
var init_list_ordonnance = __esm({
  "angular:jit:template:src\\app\\Patient\\components\\list-ordonnance\\list-ordonnance.html"() {
    list_ordonnance_default = "<p>list-ordonnance works!</p>\r\n";
  }
});

// angular:jit:style:src\app\Patient\components\list-ordonnance\list-ordonnance.css
var list_ordonnance_default2;
var init_list_ordonnance2 = __esm({
  "angular:jit:style:src\\app\\Patient\\components\\list-ordonnance\\list-ordonnance.css"() {
    list_ordonnance_default2 = "/* src/app/Patient/components/list-ordonnance/list-ordonnance.css */\n/*# sourceMappingURL=list-ordonnance.css.map */\n";
  }
});

// src/app/Patient/components/list-ordonnance/list-ordonnance.ts
var ListOrdonnance;
var init_list_ordonnance3 = __esm({
  "src/app/Patient/components/list-ordonnance/list-ordonnance.ts"() {
    "use strict";
    init_tslib_es6();
    init_list_ordonnance();
    init_list_ordonnance2();
    init_core();
    ListOrdonnance = class ListOrdonnance2 {
    };
    ListOrdonnance = __decorate([
      Component({
        selector: "app-list-ordonnance",
        imports: [],
        template: list_ordonnance_default,
        styles: [list_ordonnance_default2]
      })
    ], ListOrdonnance);
  }
});

// src/app/Patient/components/list-ordonnance/list-ordonnance.spec.ts
var require_list_ordonnance_spec = __commonJS({
  "src/app/Patient/components/list-ordonnance/list-ordonnance.spec.ts"(exports) {
    init_testing();
    init_list_ordonnance3();
    describe("ListOrdonnance", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [ListOrdonnance]
        }).compileComponents();
        fixture = TestBed.createComponent(ListOrdonnance);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_list_ordonnance_spec();
//# sourceMappingURL=spec-list-ordonnance.spec.js.map
