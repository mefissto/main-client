import { User } from '@interfaces';

import { createPcAction, createPcErrorAction, createPcNoPayloadAction } from '@state-manager';

import { LoginDto } from '../dtos/login.dto';
import { RegistrationDto } from '../dtos/registration.dto';
import { ResetPasswordDto } from '../dtos/reset-password.dto';

/**
 * Login Actions
 */
export const loginRequest = createPcAction<LoginDto>('[Auth] Login Request');
export const loginSuccess = createPcAction<User>('[Auth] Login Success');
export const loginFailure = createPcErrorAction('[Auth] Login Failure');

/**
 * Register Actions
 */
export const registerRequest = createPcAction<RegistrationDto>('[Auth] Register Request');
export const registerSuccess = createPcAction<User>('[Auth] Register Success');
export const registerFailure = createPcErrorAction('[Auth] Register Failure');

/**
 * Reset Password Actions
 */
export const resetPasswordRequest = createPcAction<ResetPasswordDto>(
  '[Auth] Reset Password Request',
);
export const resetPasswordSuccess = createPcNoPayloadAction('[Auth] Reset Password Success');
export const resetPasswordFailure = createPcErrorAction('[Auth] Reset Password Failure');

/**
 * Logout Actions
 */
export const logoutRequest = createPcNoPayloadAction('[Auth] Logout Request');
export const logoutSuccess = createPcNoPayloadAction('[Auth] Logout Success');
export const logoutFailure = createPcErrorAction('[Auth] Logout Failure');
