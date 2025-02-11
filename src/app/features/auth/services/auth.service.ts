import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApiService } from '@core/services/base-api.service';

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

  logout(): void {
    // Perform logout logic here, e.g., clear tokens, user data, etc.
    localStorage.removeItem('userToken');
    // Add any other logout logic as needed
  }
}
