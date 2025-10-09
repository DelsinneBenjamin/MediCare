import {
  UserService,
  init_user_service
} from "./chunk-XRM7BMAW.js";
import "./chunk-WUGIDABR.js";
import "./chunk-MXCFJN3J.js";
import "./chunk-47VIII2Y.js";
import {
  Component,
  TestBed,
  __async,
  __commonJS,
  __decorate,
  __esm,
  init_core,
  init_testing,
  init_tslib_es6,
  inject
} from "./chunk-JYOIWBNR.js";

// angular:jit:template:src\app\shared\components\profile\profile.html
var profile_default;
var init_profile = __esm({
  "angular:jit:template:src\\app\\shared\\components\\profile\\profile.html"() {
    profile_default = `<div class="max-w-3xl ml-6 p-10 bg-white rounded-xl shadow-lg border border-gray-200">\r
  @if (currentUser(); as user) {\r
    <!-- User Header -->\r
    <div class="text-center mb-10">\r
      <h2 class="text-4xl font-extrabold text-gray-900 tracking-tight">{{ user.username }}</h2>\r
      <p class="text-lg text-gray-600 mt-2">{{ user.email }} \u2014 <span class="text-gray-500">ID: {{ user.id }}</span></p>\r
    </div>\r
\r
    @switch (user.role) {\r
      @case ('doctor') {\r
        @if (user.doctor; as doctor) {\r
          <div class="bg-blue-50 p-6 rounded-xl border-l-6 border-blue-600 shadow-sm">\r
            <h3 class="text-2xl font-semibold text-blue-700">Informations M\xE9decin</h3>\r
            <dl class="mt-4 space-y-3">\r
              <div>\r
                <dt class="text-sm font-medium text-gray-500">Sp\xE9cialit\xE9</dt>\r
                <dd class="text-lg text-gray-800">{{ doctor.speciality }}</dd>\r
              </div>\r
              <div>\r
                <dt class="text-sm font-medium text-gray-500">Num\xE9ro INAMI</dt>\r
                <dd class="text-lg text-gray-800">{{ doctor.inami_number }}</dd>\r
              </div>\r
            </dl>\r
          </div>\r
        }\r
      }\r
      @case ('patient') {\r
        @if (user.patient; as patient) {\r
          <div class="bg-green-50 p-6 rounded-xl border-l-6 border-green-600 shadow-sm">\r
            <h3 class="text-2xl font-semibold text-green-700">Informations Patient</h3>\r
            <dl class="mt-4 space-y-3">\r
              <div>\r
                <dt class="text-sm font-medium text-gray-500">Num\xE9ro National</dt>\r
                <dd class="text-lg text-gray-800">{{ patient.nationnal_number }}</dd>\r
              </div>\r
            </dl>\r
          </div>\r
        }\r
      }\r
    }\r
  }\r
</div>`;
  }
});

// angular:jit:style:src\app\shared\components\profile\profile.css
var profile_default2;
var init_profile2 = __esm({
  "angular:jit:style:src\\app\\shared\\components\\profile\\profile.css"() {
    profile_default2 = "/* src/app/shared/components/profile/profile.css */\n/*# sourceMappingURL=profile.css.map */\n";
  }
});

// src/app/shared/components/profile/profile.ts
var Profile;
var init_profile3 = __esm({
  "src/app/shared/components/profile/profile.ts"() {
    "use strict";
    init_tslib_es6();
    init_profile();
    init_profile2();
    init_core();
    init_user_service();
    Profile = class Profile2 {
      userService = inject(UserService);
      currentUser = this.userService.currentUser;
    };
    Profile = __decorate([
      Component({
        selector: "app-profile",
        imports: [],
        template: profile_default,
        styles: [profile_default2]
      })
    ], Profile);
  }
});

// src/app/shared/components/profile/profile.spec.ts
var require_profile_spec = __commonJS({
  "src/app/shared/components/profile/profile.spec.ts"(exports) {
    init_testing();
    init_profile3();
    describe("Profile", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Profile]
        }).compileComponents();
        fixture = TestBed.createComponent(Profile);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_profile_spec();
//# sourceMappingURL=spec-profile.spec.js.map
