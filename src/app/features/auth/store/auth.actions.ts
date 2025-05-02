import { User } from '@interfaces';

import { createPcAction, createPcErrorAction, createPcNoPayloadAction } from '@state-manager';

import { ResetPasswordDto } from '../dtos/reset-password.dto';
import { SignInRequestDto } from '../dtos/sign-in-request.dto';
import { SignInResponseDto } from '../dtos/sign-in-response.dto';
import { SignUpRequestDto } from '../dtos/sign-up-request.dto';
import { SocialSignInDto } from '../dtos/social-sign-in.dto';

/**
 * Login Actions
 */
export const signInRequest = createPcAction<SignInRequestDto>('[Auth] Sign In Request');
export const signInSuccess = createPcAction<SignInResponseDto>('[Auth] Sign In Success');
export const signInFailure = createPcErrorAction('[Auth] Sign In Failure');

/**
 * Register Actions
 */
export const signUpRequest = createPcAction<SignUpRequestDto>('[Auth] Sign Up Request');
export const signUpSuccess = createPcAction<User>('[Auth] Sign Up Success');
export const signUpFailure = createPcErrorAction('[Auth] Sign Up Failure');

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

/**
 * Login with google Actions
 */
export const signInWithGoogleRequest = createPcAction<SocialSignInDto>(
  '[Auth] Sign In With Google Request',
);
export const signInWithGoogleSuccess = createPcAction<SignInResponseDto>(
  '[Auth] Sign In With Google Success',
);
export const signInWithGoogleFailure = createPcErrorAction('[Auth] Sign In With Google Failure');
