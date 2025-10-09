import {
  Navbar,
  init_navbar
} from "./chunk-CCBG6KJ5.js";
import "./chunk-MXCFJN3J.js";
import "./chunk-47VIII2Y.js";
import {
  TestBed,
  __async,
  __commonJS,
  init_testing
} from "./chunk-JYOIWBNR.js";

// src/app/shared/components/navbar/navbar.spec.ts
var require_navbar_spec = __commonJS({
  "src/app/shared/components/navbar/navbar.spec.ts"(exports) {
    init_testing();
    init_navbar();
    describe("Navbar", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Navbar]
        }).compileComponents();
        fixture = TestBed.createComponent(Navbar);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_navbar_spec();
//# sourceMappingURL=spec-navbar.spec.js.map
