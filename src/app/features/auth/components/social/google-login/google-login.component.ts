import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, OnInit, output } from '@angular/core';

import * as GoogleOneTap from '../../../interfaces/google-one-tap';
import {
  GOOGLE_BUTTON_CONFIG,
  GOOGLE_ID_CONFIGURATION,
  GOOGLE_LOGIN_BUTTON_ID,
} from './google-login.constants';

declare const google: GoogleOneTap.google;

@Component({
  selector: 'pc-google-login',
  imports: [],
  templateUrl: './google-login.component.html',
  styleUrl: './google-login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoogleLoginComponent implements OnInit {
  // The button configuration for Google One Tap
  readonly buttonConfig = input<GoogleOneTap.GsiButtonConfiguration>(GOOGLE_BUTTON_CONFIG);

  // Switch to show or hide the prompt
  readonly showAuthPrompt = input<boolean>(false);

  readonly oauthResponse = output<string>();

  private readonly document = inject(DOCUMENT);

  ngOnInit(): void {
    this.initializeGoogleSignIn();
    this.showPrompt();
  }

  private initializeGoogleSignIn(): void {
    google.accounts.id.initialize({
      ...GOOGLE_ID_CONFIGURATION,
      callback: (response: GoogleOneTap.CredentialResponse) => {
        this.oauthResponse.emit(response.credential);
      },
    });

    this.renderButton();
  }

  private renderButton(): void {
    const button = this.document.getElementById(GOOGLE_LOGIN_BUTTON_ID);
    if (!button) {
      throw new Error('Google login button not found in the document.');
      return;
    }

    google.accounts.id.renderButton(button, this.buttonConfig());
  }

  private showPrompt(): void {
    if (this.showAuthPrompt()) {
      google.accounts.id.prompt();
    }
  }
}
