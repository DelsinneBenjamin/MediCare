import {Component, inject, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth-service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginForm: FormGroup;
  loginError: string | null = null;
  isLoggedIn: boolean = false;

  private fb = inject(FormBuilder)
  private authService = inject(AuthService)
  private router = inject(Router)

  constructor() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        error: (err) => {
          this.loginError = 'Invalid email or password';
          console.error('Login error:', err);
        }
      });
    } else {
      this.loginError = 'Please fill in all required fields correctly.';
    }
  }

}
