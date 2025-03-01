import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApiService } from '@core/services/base-api.service';

import { Tokens } from '@interfaces';
import { ResetPasswordDto } from '../dtos/reset-password.dto';
import { SignInRequestDto } from '../dtos/sign-in-request.dto';
import { SignInResponseDto } from '../dtos/sign-in-response.dto';
import { SignUpRequestDto } from '../dtos/sign-up-request.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseApiService = inject(BaseApiService);

  login(payload: SignInRequestDto): Observable<SignInResponseDto> {
    return this.baseApiService.post('auth/sign-in', payload);
  }

  registration(payload: SignUpRequestDto): Observable<any> {
    return this.baseApiService.post('auth/sign-up', payload);
  }

  resetPassword(payload: ResetPasswordDto): Observable<any> {
    return this.baseApiService.post('auth/reset-password', payload);
  }

  refreshTokens(refreshToken: string): Observable<Tokens> {
    return this.baseApiService.post('auth/refresh-token', { refreshToken });
  }
}
