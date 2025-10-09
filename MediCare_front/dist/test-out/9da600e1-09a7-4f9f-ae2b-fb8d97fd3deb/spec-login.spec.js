import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  init_forms
} from "./chunk-4ZNJMPOI.js";
import {
  AuthService,
  init_auth_service
} from "./chunk-WUGIDABR.js";
import {
  Router,
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

// angular:jit:template:src\app\authentification\login\login.html
var login_default;
var init_login = __esm({
  "angular:jit:template:src\\app\\authentification\\login\\login.html"() {
    login_default = '<div class="flex min-h-screen flex-col justify-center bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">\r\n  <!-- Logo & Titre -->\r\n  <div class="mx-auto w-full max-w-md text-center">\r\n    <div class="mx-auto h-12 w-12 runded-full bg-teal-100 flex items-center justiofy-center">\r\n      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">\r\n        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />\r\n      </svg>\r\n    </div>\r\n    <h2 class="mt-6 text-2xl font-bold text-gray-800">MediCare</h2>\r\n    <p class="mt-2 text-sm text-gray-600">Veuillez vous identifier pour acc\xE9der \xE0 votre compte.</p>\r\n  </div>\r\n\r\n  <!-- Formulaire -->\r\n  <div class="mt-8 mx-auto w-full max-w-md">\r\n    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="space-y-6 bg-white p-6 rounded-xl shadow-md" novalidate>\r\n\r\n      <!-- Email -->\r\n      <div>\r\n        <label for="email" class="block text-sm font-medium text-gray-700">Adresse e-mail</label>\r\n        <div class="mt-1">\r\n          <input\r\n            type="email"\r\n            id="email"\r\n            formControlName="email"\r\n            autocomplete="email"\r\n            required\r\n            class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"\r\n          />\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Mot de passe -->\r\n      <div>\r\n        <div class="flex items-center justify-between">\r\n          <label for="password" class="block text-sm font-medium text-gray-700">Mot de passe</label>\r\n          <a href="#" class="text-sm font-medium text-teal-600 hover:text-teal-500">Mot de passe oubli\xE9 ?</a>\r\n        </div>\r\n        <div class="mt-1">\r\n          <input\r\n            type="password"\r\n            id="password"\r\n            formControlName="password"\r\n            autocomplete="current-password"\r\n            required\r\n            class="block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"\r\n          />\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Erreur -->\r\n      <div *ngIf="loginError" class="rounded-md bg-red-50 p-3 text-sm text-red-700 border border-red-200">\r\n        {{ loginError }}\r\n      </div>\r\n\r\n      <!-- Bouton Connexion -->\r\n      <div>\r\n        <button type="submit"\r\n          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition">\r\n          Se connecter\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<!-- \xC9tat de connexion -->\r\n<div class="mt-8 text-center">\r\n  @if (isLoggedIn) {\r\n    <p class="text-green-700 font-medium">Connect\xE9</p>\r\n  } @else {\r\n    <p class="text-gray-500">Pas encore connect\xE9</p>\r\n  }\r\n</div>';
  }
});

// angular:jit:style:src\app\authentification\login\login.css
var login_default2;
var init_login2 = __esm({
  "angular:jit:style:src\\app\\authentification\\login\\login.css"() {
    login_default2 = "/* src/app/authentification/login/login.css */\n/*# sourceMappingURL=login.css.map */\n";
  }
});

// src/app/authentification/login/login.ts
var Login;
var init_login3 = __esm({
  "src/app/authentification/login/login.ts"() {
    "use strict";
    init_tslib_es6();
    init_login();
    init_login2();
    init_core();
    init_common();
    init_forms();
    init_router();
    init_auth_service();
    Login = class Login2 {
      loginForm;
      loginError = null;
      isLoggedIn = false;
      fb = inject(FormBuilder);
      authService = inject(AuthService);
      router = inject(Router);
      constructor() {
        this.loginForm = this.fb.group({
          email: ["", [Validators.required, Validators.email]],
          password: ["", [Validators.required, Validators.minLength(6)]]
        });
        this.isLoggedIn = this.authService.isLoggedIn();
      }
      onSubmit() {
        if (this.loginForm.valid) {
          this.authService.login(this.loginForm.value).subscribe({
            error: (err) => {
              this.loginError = "Invalid email or password";
              console.error("Login error:", err);
            }
          });
        } else {
          this.loginError = "Please fill in all required fields correctly.";
        }
      }
      static ctorParameters = () => [];
    };
    Login = __decorate([
      Component({
        selector: "app-login",
        imports: [CommonModule, ReactiveFormsModule],
        template: login_default,
        styles: [login_default2]
      })
    ], Login);
  }
});

// src/app/authentification/login/login.spec.ts
var require_login_spec = __commonJS({
  "src/app/authentification/login/login.spec.ts"(exports) {
    init_testing();
    init_login3();
    describe("Login", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Login]
        }).compileComponents();
        fixture = TestBed.createComponent(Login);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_login_spec();
//# sourceMappingURL=spec-login.spec.js.map
