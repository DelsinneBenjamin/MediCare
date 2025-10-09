import {
  Filter,
  init_filter
} from "./chunk-V7TBR32K.js";
import {
  TestBed,
  __async,
  __commonJS,
  init_testing
} from "./chunk-JYOIWBNR.js";

// src/app/shared/filter/filter.spec.ts
var require_filter_spec = __commonJS({
  "src/app/shared/filter/filter.spec.ts"(exports) {
    init_testing();
    init_filter();
    describe("Filter", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Filter]
        }).compileComponents();
        fixture = TestBed.createComponent(Filter);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_filter_spec();
//# sourceMappingURL=spec-filter.spec.js.map
