import {
  Footer,
  init_footer
} from "./chunk-WW63ZLRW.js";
import {
  TestBed,
  __async,
  __commonJS,
  init_testing
} from "./chunk-JYOIWBNR.js";

// src/app/shared/components/footer/footer.spec.ts
var require_footer_spec = __commonJS({
  "src/app/shared/components/footer/footer.spec.ts"(exports) {
    init_testing();
    init_footer();
    describe("Footer", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Footer]
        }).compileComponents();
        fixture = TestBed.createComponent(Footer);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_footer_spec();
//# sourceMappingURL=spec-footer.spec.js.map
