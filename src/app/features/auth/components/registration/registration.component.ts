import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';

import { confirmPasswordValidator } from '@core/validators/confirm-password';
import { signUpRequest } from '../../store/auth.actions';
import { AuthState } from '../../store/auth.reducer';

@Component({
  selector: 'pc-registration',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    NgIf,
    RouterModule,
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent {
  private readonly store: Store<AuthState> = inject(Store);
  private readonly formBuilder = inject(NonNullableFormBuilder);

  readonly form = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required, confirmPasswordValidator('password')]],
  });

  onSubmit(): void {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      console.log(this.form.value);
      const { confirmPassword, ...payload } = this.form.getRawValue();

      this.store.dispatch(signUpRequest({ payload }));
    }
  }
}
