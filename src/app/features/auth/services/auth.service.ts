import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { LoginDto } from '../dtos/login.dto';
import { RegistrationDto } from '../dtos/registration.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(payload: LoginDto): Observable<any> {
    return of(payload).pipe(delay(1000));
  }

  registration(payload: RegistrationDto): Observable<any> {
    return of(payload).pipe(delay(1000));
  }

  logout(): void {
    // Perform logout logic here, e.g., clear tokens, user data, etc.
    localStorage.removeItem('userToken');
    // Add any other logout logic as needed
  }
}
