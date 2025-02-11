import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [AuthService],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  private authService = inject(AuthService);
  private _router = inject(Router);
  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onSignup(): void {
    if (this.signupForm.valid) {
      this.authService.signup(this.signupForm.value).subscribe({
        next: () => alert('Signup successful!'),
        error: (err) => console.error('Signup failed', err),
      });
    }
  }
  onLogin(): void {
    this._router.navigate(['/login']);
  }
}
