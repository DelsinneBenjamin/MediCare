import {
  AuthService,
  init_auth_service
} from "./chunk-WUGIDABR.js";
import {
  HttpClient,
  init_http
} from "./chunk-MXCFJN3J.js";
import {
  Injectable,
  __decorate,
  __esm,
  computed,
  init_core,
  init_tslib_es6,
  inject,
  signal
} from "./chunk-JYOIWBNR.js";

// src/app/core/services/user-service.ts
var UserService;
var init_user_service = __esm({
  "src/app/core/services/user-service.ts"() {
    "use strict";
    init_tslib_es6();
    init_auth_service();
    init_http();
    init_core();
    UserService = class UserService2 {
      apiUrl = "http://localhost:8000/api/users";
      currentUser = signal(null);
      currentId = computed(() => this.currentUser()?.id ?? null);
      http = inject(HttpClient);
      authService = inject(AuthService);
      //  ====================== GET ALL - Filtrer et Paginée ========================
      getAllUser(url = this.apiUrl, filter) {
        const headers = this.authService.getHeaders();
        return this.http.get(`${this.apiUrl}/`, { headers, params: filter });
      }
      getAllPatient(url = `${this.apiUrl}/by-role/patient`, filter) {
        const headers = this.authService.getHeaders();
        return this.http.get(url, { headers, params: filter });
      }
      getAllDoctor() {
        return this.http.get(`${this.apiUrl}/by-role/doctor`);
      }
      //  ===========================================================================
      getCurrentUser() {
        const headers = this.authService.getHeaders();
        return this.http.get(`${this.apiUrl}/me/`, { headers });
      }
      setCurrentUser(user) {
        this.currentUser.set(user);
      }
      getCurrentUserId() {
        const id = this.currentUser()?.id ?? null;
        return id;
      }
    };
    UserService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], UserService);
  }
});

export {
  UserService,
  init_user_service
};
//# sourceMappingURL=chunk-XRM7BMAW.js.map
