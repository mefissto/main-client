import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  logout(): void {
    // Perform logout logic here, e.g., clear tokens, user data, etc.
    localStorage.removeItem('userToken');
    // Add any other logout logic as needed
  }
}
