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

import { loginRequest } from '../../store/auth.actions';
import { AuthState } from '../../store/auth.reducer';

@Component({
  selector: 'pc-login',
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
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private readonly store: Store<AuthState> = inject(Store);
  private readonly formBuilder = inject(NonNullableFormBuilder);

  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  onSubmit(): void {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      console.log(this.form.value);

      this.store.dispatch(loginRequest({ payload: this.form.getRawValue() }));
    }
  }
}
