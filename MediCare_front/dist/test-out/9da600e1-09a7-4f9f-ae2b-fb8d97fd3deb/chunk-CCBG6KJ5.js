import {
  RouterLink,
  init_router
} from "./chunk-MXCFJN3J.js";
import {
  Component,
  __decorate,
  __esm,
  init_core,
  init_tslib_es6
} from "./chunk-JYOIWBNR.js";

// angular:jit:template:src\app\shared\components\navbar\navbar.html
var navbar_default;
var init_navbar = __esm({
  "angular:jit:template:src\\app\\shared\\components\\navbar\\navbar.html"() {
    navbar_default = '<header class="bg-white shadow-sm relative">\r\n  <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\r\n    <div class="flex justify-between items-center py-6">\r\n      <!-- Logo -->\r\n      <div class="flex items-center">\r\n        <div class="w-10 h-10 bg-medical-blue rounded-lg flex items-center justify-center mr-3">\r\n          <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">\r\n            <path d="M10 2L13 6h4l-3 7-4-2-4 2-3-7h4l3-4z" />\r\n          </svg>\r\n        </div>\r\n        <h1 class="text-2xl font-bold text-dark-blue">MediCare</h1>\r\n      </div>\r\n\r\n      <!-- Desktop Navigation -->\r\n      <div class="hidden md:flex items-center space-x-8">\r\n        <div class="flex space-x-8">\r\n          <a href="#Accueil" class="text-gray-600 hover:text-medical-blue transition-colors font-medium">Accueil</a>\r\n        </div>\r\n        <!-- S\xE9paration visuelle -->\r\n        <div class="w-px h-6 bg-gray-300"></div>\r\n        <a routerLink="login" class="text-gray-600 hover:text-medical-blue transition-colors font-medium">\r\n          Connexion\r\n        </a>\r\n      </div>\r\n\r\n      <!-- Mobile menu button -->\r\n      <button (click)="toggleOpen()" id="mobile-menu-button" class="md:hidden text-gray-600 hover:text-medical-blue transition-colors">\r\n        @if(!isOpen){\r\n            <svg  id="menu-open" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>\r\n            </svg>\r\n        }@else{\r\n            <svg  id="menu-close" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r\n            </svg>\r\n        }\r\n        </button>\r\n        \r\n    </div>\r\n\r\n    <!-- Mobile Navigation Menu -->\r\n    <div\r\n      id="mobile-menu"\r\n      class="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50"\r\n      [class.hidden]="!isOpen"\r\n    >\r\n      <div class="px-4 py-6 space-y-4">\r\n        <a href="#Accueil" class="text-gray-600 hover:text-medical-blue transition-colors font-medium">Accueil</a>\r\n        <hr class="border-gray-200 my-4" />\r\n\r\n        <a routerLink="login" class="text-gray-600 hover:text-medical-blue transition-colors font-medium">\r\n          Connexion\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n';
  }
});

// angular:jit:style:src\app\shared\components\navbar\navbar.css
var navbar_default2;
var init_navbar2 = __esm({
  "angular:jit:style:src\\app\\shared\\components\\navbar\\navbar.css"() {
    navbar_default2 = "/* src/app/shared/components/navbar/navbar.css */\n/*# sourceMappingURL=navbar.css.map */\n";
  }
});

// src/app/shared/components/navbar/navbar.ts
var Navbar;
var init_navbar3 = __esm({
  "src/app/shared/components/navbar/navbar.ts"() {
    "use strict";
    init_tslib_es6();
    init_navbar();
    init_navbar2();
    init_core();
    init_router();
    Navbar = class Navbar2 {
      isOpen = false;
      toggleOpen() {
        this.isOpen = !this.isOpen;
      }
    };
    Navbar = __decorate([
      Component({
        selector: "app-navbar",
        imports: [RouterLink],
        template: navbar_default,
        styles: [navbar_default2]
      })
    ], Navbar);
  }
});

export {
  Navbar,
  init_navbar3 as init_navbar
};
//# sourceMappingURL=chunk-CCBG6KJ5.js.map
