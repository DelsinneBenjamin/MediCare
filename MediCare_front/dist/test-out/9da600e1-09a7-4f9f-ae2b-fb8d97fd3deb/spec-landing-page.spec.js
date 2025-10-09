import {
  Footer,
  init_footer
} from "./chunk-WW63ZLRW.js";
import {
  Navbar,
  init_navbar
} from "./chunk-CCBG6KJ5.js";
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

// angular:jit:template:src\app\features\Landing\landing-page\landing-page.html
var landing_page_default;
var init_landing_page = __esm({
  "angular:jit:template:src\\app\\features\\Landing\\landing-page\\landing-page.html"() {
    landing_page_default = '<app-navbar></app-navbar>\r\n\r\n<!-- Hero Section -->\r\n<section class="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-r from-blue-50 to-blue-100">\r\n  <h1 class="text-5xl font-bold text-blue-800 mb-6">MediCare</h1>\r\n  <p class="text-gray-700 text-2xl mb-8">\r\n    Simplifiez la gestion de votre cabinet m\xE9dical gr\xE2ce \xE0 une plateforme intuitive et moderne.\r\n  </p>\r\n  <a href="/signup" class="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-500 transition-colors shadow-md">\r\n    Commencer maintenant\r\n  </a>\r\n</section>\r\n\r\n<!-- About Section -->\r\n<section id="about" class="bg-white py-20 px-6 text-center">\r\n  <h2 class="text-3xl font-semibold text-blue-700 mb-4">\xC0 propos de MediCare</h2>\r\n  <p class="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">\r\n    <strong>MediCare</strong> est une plateforme <span class="font-semibold">fictive</span> d\xE9velopp\xE9e dans le cadre d\u2019un \r\n    <span class="font-semibold">projet de fin de formation</span> chez <span class="font-semibold">TechnoFutur TIC</span>.\r\n    <br><br>\r\n    L\u2019application repose sur une architecture moderne : un back-end con\xE7u avec \r\n    <span class="font-semibold">Django REST Framework</span> et un front-end d\xE9velopp\xE9 en \r\n    <span class="font-semibold">Angular</span>.  \r\n    Le projet est d\xE9ploy\xE9 sur <span class="font-semibold">Render</span> (API) et <span class="font-semibold">Vercel</span> (interface web).\r\n  </p>\r\n</section>\r\n\r\n<!-- Features Section -->\r\n<section id="features" class="py-20 px-6 bg-blue-50 text-center">\r\n  <h2 class="text-3xl font-semibold text-blue-700 mb-10">Fonctionnalit\xE9s principales</h2>\r\n\r\n  <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">\r\n    \r\n    <div class="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">\r\n      <div class="text-blue-500 mb-3">\r\n        <i class="fas fa-user-md text-3xl"></i>\r\n      </div>\r\n      <h4 class="font-bold text-xl text-blue-700 mb-2">Gestion des patients</h4>\r\n      <p class="text-gray-600">Cr\xE9ez, consultez et mettez \xE0 jour les dossiers m\xE9dicaux de vos patients en toute simplicit\xE9.</p>\r\n    </div>\r\n\r\n    <div class="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">\r\n      <div class="text-blue-500 mb-3">\r\n        <i class="fas fa-calendar-check text-3xl"></i>\r\n      </div>\r\n      <h4 class="font-bold text-xl text-blue-700 mb-2">Gestion des rendez-vous</h4>\r\n      <p class="text-gray-600">Planifiez et organisez vos consultations via une interface claire et intuitive.</p>\r\n    </div>\r\n\r\n    <div class="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">\r\n      <div class="text-blue-500 mb-3">\r\n        <i class="fas fa-file-prescription text-3xl"></i>\r\n      </div>\r\n      <h4 class="font-bold text-xl text-blue-700 mb-2">Gestion des ordonnances</h4>\r\n      <p class="text-gray-600">R\xE9digez et g\xE9rez vos ordonnances num\xE9riques de mani\xE8re simple et s\xE9curis\xE9e.</p>\r\n    </div>\r\n\r\n  </div>\r\n</section>\r\n\r\n<!-- Demo Accounts Section -->\r\n<section id="demo" class="bg-white py-20 px-6 text-center">\r\n  <h2 class="text-3xl font-semibold text-blue-700 mb-8">Comptes de d\xE9monstration</h2>\r\n  <p class="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">\r\n    Pour d\xE9couvrir MediCare, vous pouvez vous connecter avec l\u2019un des comptes de test ci-dessous.\r\n  </p>\r\n\r\n  <div class="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">\r\n    <!-- Doctor Account -->\r\n    <div class="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">\r\n      <div class="text-blue-600 mb-3">\r\n        <i class="fas fa-user-md text-3xl"></i>\r\n      </div>\r\n      <h4 class="font-bold text-xl text-blue-700 mb-2">Compte M\xE9decin</h4>\r\n      <p class="text-gray-600">Acc\xE9dez \xE0 la gestion compl\xE8te des patients, des rendez-vous et des ordonnances.</p>\r\n      <div class="mt-4 text-left bg-white p-4 rounded-lg shadow-inner">\r\n        <p><span class="font-semibold">Email :</span> docteur@medicare.com</p>\r\n        <p><span class="font-semibold">Mot de passe :</span> medicare123</p>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Patient Account -->\r\n    <div class="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">\r\n      <div class="text-blue-600 mb-3">\r\n        <i class="fas fa-user text-3xl"></i>\r\n      </div>\r\n      <h4 class="font-bold text-xl text-blue-700 mb-2">Compte Patient</h4>\r\n      <p class="text-gray-600">Explorez votre profil, consultez vos rendez-vous et vos ordonnances.</p>\r\n      <div class="mt-4 text-left bg-white p-4 rounded-lg shadow-inner">\r\n        <p><span class="font-semibold">Email :</span> patient@medicare.com</p>\r\n        <p><span class="font-semibold">Mot de passe :</span> medicare123</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<app-footer></app-footer>';
  }
});

// angular:jit:style:src\app\features\Landing\landing-page\landing-page.css
var landing_page_default2;
var init_landing_page2 = __esm({
  "angular:jit:style:src\\app\\features\\Landing\\landing-page\\landing-page.css"() {
    landing_page_default2 = "/* src/app/features/Landing/landing-page/landing-page.css */\n/*# sourceMappingURL=landing-page.css.map */\n";
  }
});

// src/app/features/Landing/landing-page/landing-page.ts
var LandingPage;
var init_landing_page3 = __esm({
  "src/app/features/Landing/landing-page/landing-page.ts"() {
    "use strict";
    init_tslib_es6();
    init_landing_page();
    init_landing_page2();
    init_core();
    init_navbar();
    init_user_service();
    init_footer();
    LandingPage = class LandingPage2 {
      userService = inject(UserService);
      isOpen = false;
      doctors = [];
      ngOnInit() {
        this.getDoctor();
      }
      getDoctor() {
        this.userService.getAllDoctor().subscribe({
          next: (result) => {
            this.doctors = result;
            console.log(this.doctors);
          },
          error: (err) => {
            console.error("Erreur r\xE9cup\xE9ration docteur:", err);
          }
        });
      }
      toggleMenu() {
        this.isOpen = !this.isOpen;
      }
    };
    LandingPage = __decorate([
      Component({
        selector: "app-landing-page",
        imports: [Navbar, Footer],
        template: landing_page_default,
        styles: [landing_page_default2]
      })
    ], LandingPage);
  }
});

// src/app/features/Landing/landing-page/landing-page.spec.ts
var require_landing_page_spec = __commonJS({
  "src/app/features/Landing/landing-page/landing-page.spec.ts"(exports) {
    init_testing();
    init_landing_page3();
    describe("LandingPage", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [LandingPage]
        }).compileComponents();
        fixture = TestBed.createComponent(LandingPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_landing_page_spec();
//# sourceMappingURL=spec-landing-page.spec.js.map
