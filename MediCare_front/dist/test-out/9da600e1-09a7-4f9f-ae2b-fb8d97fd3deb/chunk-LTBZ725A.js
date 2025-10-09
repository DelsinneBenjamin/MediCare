import {
  UserService,
  init_user_service
} from "./chunk-XRM7BMAW.js";
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
  init_core,
  init_esm,
  init_tslib_es6,
  inject,
  throwError
} from "./chunk-JYOIWBNR.js";

// src/app/core/services/doctor-service.ts
var DoctorService;
var init_doctor_service = __esm({
  "src/app/core/services/doctor-service.ts"() {
    "use strict";
    init_tslib_es6();
    init_http();
    init_core();
    init_auth_service();
    init_esm();
    init_user_service();
    DoctorService = class DoctorService2 {
      apiUrl = "http://localhost:8000/api/doctors";
      http = inject(HttpClient);
      authService = inject(AuthService);
      userService = inject(UserService);
      doctorId = this.userService.currentId;
      linkPatientToDoctor(patient) {
        const headers = this.authService.getHeaders();
        const currentDoctorId = this.userService.currentId();
        if (!currentDoctorId) {
          return throwError(() => new Error("Aucun m\xE9decin connect\xE9."));
        }
        const payload = {
          patient_id: patient,
          doctor_id: currentDoctorId
        };
        return this.http.post(`${this.apiUrl}/${currentDoctorId}/link/`, payload, { headers });
      }
      unlinkPatientOfDoctor(patient) {
        const headers = this.authService.getHeaders();
        const currentDoctorId = this.userService.currentId();
        if (!currentDoctorId) {
          return throwError(() => new Error("Aucun m\xE9decin connect\xE9."));
        }
        const payload = {
          patient_id: patient,
          doctor_id: currentDoctorId
        };
        return this.http.post(`${this.apiUrl}/${currentDoctorId}/unlink_patient/`, payload, { headers });
      }
    };
    DoctorService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], DoctorService);
  }
});

export {
  DoctorService,
  init_doctor_service
};
//# sourceMappingURL=chunk-LTBZ725A.js.map
