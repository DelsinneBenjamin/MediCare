import {
  UserService,
  init_user_service
} from "./chunk-XRM7BMAW.js";
import {
  AuthService,
  init_auth_service
} from "./chunk-WUGIDABR.js";
import {
  Router,
  RouterLink,
  RouterOutlet,
  init_router
} from "./chunk-MXCFJN3J.js";
import {
  CommonModule,
  init_common
} from "./chunk-47VIII2Y.js";
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

// angular:jit:template:src\app\Doctor\components\doctor-layout\doctor-layout.html
var doctor_layout_default;
var init_doctor_layout = __esm({
  "angular:jit:template:src\\app\\Doctor\\components\\doctor-layout\\doctor-layout.html"() {
    doctor_layout_default = '@if (currentUser(); as user) {\r\n<div class="flex h-screen bg-gray-50">\r\n\r\n  <!-- Sidebar claire -->\r\n  <aside class="w-64 bg-gradient-to-b from-blue-50 to-indigo-50 text-gray-800 p-5 flex flex-col h-full border-r border-indigo-100 rounded shadow-sm">\r\n\r\n    <!-- Logo / Titre -->\r\n    <div class="mb-8 flex items-center space-x-3">\r\n      <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">\r\n        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v10a2 2 0 01-2 2h-4l-2-2H5z" />\r\n      </svg>\r\n      <h1 class="text-xl font-extrabold tracking-wide text-indigo-700">MediCare</h1>\r\n    </div>\r\n\r\n    <!-- Navigation -->\r\n    <nav class="space-y-1.5 flex-1">\r\n\r\n      <a routerLink="/doctor/profile" routerLinkActive="active"\r\n        class="group flex items-center px-4 py-3 rounded-lg transition-all duration-200 hover:bg-indigo-100 active:bg-indigo-200 text-gray-700 hover:text-indigo-700">\r\n        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-indigo-400 group-hover:text-indigo-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />\r\n        </svg>\r\n        <span class="font-medium">Mon Profil</span>\r\n      </a>\r\n\r\n      <a routerLink="/doctor/list-patient" routerLinkActive="active"\r\n        class="group flex items-center px-4 py-3 rounded-lg transition-all duration-200 hover:bg-indigo-100 active:bg-indigo-200 text-gray-700 hover:text-indigo-700">\r\n        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-indigo-400 group-hover:text-indigo-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />\r\n        </svg>\r\n        <span class="font-medium">Liste des patients</span>\r\n      </a>\r\n\r\n      <a\r\n        class="group flex items-center px-4 py-3 rounded-lg transition-all duration-200 hover:bg-indigo-100 active:bg-indigo-200 text-gray-700 hover:text-indigo-700">\r\n        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-indigo-400 group-hover:text-indigo-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />\r\n        </svg>\r\n        <span class="font-medium">Rendez-Vous</span>\r\n      </a>\r\n\r\n      <a\r\n        class="group flex items-center px-4 py-3 rounded-lg transition-all duration-200 hover:bg-indigo-100 active:bg-indigo-200 text-gray-700 hover:text-indigo-700">\r\n        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-indigo-400 group-hover:text-indigo-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />\r\n        </svg>\r\n        <span class="font-medium">Medicaments</span>\r\n      </a>\r\n\r\n    </nav>\r\n\r\n    <!-- D\xE9connexion -->\r\n    <div class="pt-6 mt-auto">\r\n      <button type="button" (click)="logout()"\r\n        class="w-full flex items-center justify-center px-4 py-2.5 rounded-lg bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-medium text-sm transition-colors shadow-sm hover:shadow">\r\n        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />\r\n        </svg>\r\n        Se d\xE9connecter\r\n      </button>\r\n    </div>\r\n  </aside>\r\n\r\n  <!-- Main -->\r\n  <main class="flex-1 p-6 overflow-y-auto">\r\n    <div class="bg-white rounded-xl shadow-sm border border-gray-100 h-full flex flex-col">\r\n\r\n      <div class="p-6 border-b border-gray-100">\r\n        <h2 class="text-xl font-bold text-gray-800">Tableau de bord</h2>\r\n        <p class="text-gray-500 mt-1 text-sm">Bienvenue, <span class="font-medium text-indigo-600">{{user.username}}</span> \u2014 {{user.doctor?.speciality}}</p>\r\n      </div>\r\n\r\n      <div class="p-6 flex-1">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n  </main>\r\n</div>\r\n} @else {\r\n  <div class="flex h-screen items-center justify-center bg-gray-50">\r\n    <p class="text-gray-500 text-sm italic">Chargement de vos donn\xE9es...</p>\r\n  </div>\r\n}\r\n';
  }
});

// angular:jit:style:src\app\Doctor\components\doctor-layout\doctor-layout.css
var doctor_layout_default2;
var init_doctor_layout2 = __esm({
  "angular:jit:style:src\\app\\Doctor\\components\\doctor-layout\\doctor-layout.css"() {
    doctor_layout_default2 = "/* src/app/Doctor/components/doctor-layout/doctor-layout.css */\n/*# sourceMappingURL=doctor-layout.css.map */\n";
  }
});

// src/app/Doctor/components/doctor-layout/doctor-layout.ts
var DoctorLayout;
var init_doctor_layout3 = __esm({
  "src/app/Doctor/components/doctor-layout/doctor-layout.ts"() {
    "use strict";
    init_tslib_es6();
    init_doctor_layout();
    init_doctor_layout2();
    init_core();
    init_common();
    init_router();
    init_auth_service();
    init_user_service();
    DoctorLayout = class DoctorLayout2 {
      authService = inject(AuthService);
      userService = inject(UserService);
      router = inject(Router);
      currentUser = this.userService.currentUser;
      currendId = this.userService.currentId;
      ngOnInit() {
        this.getCurrentUser();
      }
      getCurrentUser() {
        this.userService.getCurrentUser().subscribe({
          next: (user) => {
            this.userService.setCurrentUser(user);
            console.log("CurentUser ICI", this.currentUser(), console.log("CurentID ICI", this.currendId()));
          },
          error: (err) => {
            console.error("Erreur r\xE9cup\xE9ration utilisateur :", err);
          }
        });
      }
      logout() {
        this.authService.logout();
        this.router.navigate(["/login"]);
      }
    };
    DoctorLayout = __decorate([
      Component({
        selector: "app-doctor-layout",
        standalone: true,
        imports: [CommonModule, RouterLink, RouterOutlet],
        template: doctor_layout_default,
        styles: [doctor_layout_default2]
      })
    ], DoctorLayout);
  }
});

// src/app/Doctor/components/doctor-layout/doctor-layout.spec.ts
var require_doctor_layout_spec = __commonJS({
  "src/app/Doctor/components/doctor-layout/doctor-layout.spec.ts"(exports) {
    init_testing();
    init_doctor_layout3();
    describe("DoctorLayout", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [DoctorLayout]
        }).compileComponents();
        fixture = TestBed.createComponent(DoctorLayout);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_doctor_layout_spec();
//# sourceMappingURL=spec-doctor-layout.spec.js.map
