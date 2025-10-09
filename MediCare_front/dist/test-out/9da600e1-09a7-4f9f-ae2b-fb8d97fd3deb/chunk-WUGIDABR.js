import {
  HttpClient,
  HttpHeaders,
  Router,
  init_http,
  init_router
} from "./chunk-MXCFJN3J.js";
import {
  Injectable,
  __decorate,
  __esm,
  init_core,
  init_esm,
  init_tslib_es6,
  inject,
  signal,
  tap
} from "./chunk-JYOIWBNR.js";

// src/app/core/services/auth-service.ts
var AuthService;
var init_auth_service = __esm({
  "src/app/core/services/auth-service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_esm();
    init_http();
    init_router();
    AuthService = class AuthService2 {
      apiUrl = "http://localhost:8000/api/users/";
      // url de l'API
      isLoggedIn = signal(false);
      http = inject(HttpClient);
      router = inject(Router);
      // =========================== Login + Register  ===============================
      updateLoginStatus() {
        const token = this.getToken();
        this.isLoggedIn.set(!!token);
        console.log(this.isLoggedIn());
      }
      register(data) {
        return this.http.post(`${this.apiUrl}register/`, data).pipe(tap((res) => {
          localStorage.setItem("access", res.tokens.access);
          localStorage.setItem("refresh", res.tokens.refresh);
          this.isLoggedIn.set(true);
          this.updateLoginStatus();
        }));
      }
      login(data) {
        return this.http.post(`${this.apiUrl}login/`, data).pipe(tap((response) => {
          localStorage.setItem("access", response.access);
          localStorage.setItem("refresh", response.refresh);
          this.isLoggedIn.set(true);
          this.updateLoginStatus();
          const role = response.user?.role;
          if (role === "doctor") {
            this.router.navigate(["/doctor"]);
          } else if (role === "patient") {
            this.router.navigate(["/patient"]);
          } else {
            this.router.navigate(["/"]);
          }
        }));
      }
      // =========================== GET ===============================
      // ici je recup le token :string|null car il peu être vide AVANT connexion ofc.. si je met sun paramétre c'est chiant pour la suite
      getToken() {
        if (typeof window !== "undefined") {
          return localStorage.getItem("access");
        }
        return null;
      }
      saveToken(token) {
        if (typeof window !== "undefined") {
          localStorage.setItem("access", token);
        }
      }
      getTokenPayload() {
        const token = this.getToken();
        if (token) {
          const elements = token.split(".");
          return JSON.parse(atob(elements[1]));
        }
        return null;
      }
      getHeaders() {
        const token = this.getToken();
        return new HttpHeaders({
          Authorization: `Bearer ${token}`
        });
      }
      // =========================== Verification  ===============================
      logout() {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        this.isLoggedIn.set(false);
        this.router.navigate(["/login"]);
      }
    };
    AuthService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], AuthService);
  }
});

export {
  AuthService,
  init_auth_service
};
//# sourceMappingURL=chunk-WUGIDABR.js.map
