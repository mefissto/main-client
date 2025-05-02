import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';

import { signInRequest, signInWithGoogleRequest } from '../../store/auth.actions';
import { AuthState } from '../../store/auth.reducer';
import { GoogleLoginComponent } from '../social/google-login/google-login.component';

@Component({
  selector: 'pc-login',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    GoogleLoginComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
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

      this.store.dispatch(signInRequest({ payload: this.form.getRawValue() }));
    }
  }

  handleGoogleLogin(token: string): void {
    this.store.dispatch(signInWithGoogleRequest({ payload: { token } }));
  }
}
