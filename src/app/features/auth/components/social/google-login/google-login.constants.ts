import { environment } from '@env/environment';

import { GsiButtonConfiguration, IdConfiguration } from '../../../interfaces/google-one-tap';

export const GOOGLE_BUTTON_CONFIG: GsiButtonConfiguration = {
  type: 'standard',
  theme: 'filled_blue',
  size: 'large',
  text: 'signup_with',
  shape: 'rectangular',
};

export const GOOGLE_LOGIN_BUTTON_ID = 'googleLoginButton';

export const GOOGLE_ID_CONFIGURATION: IdConfiguration = {
  client_id: environment.googleOAuthClientId,
  auto_select: false,
  cancel_on_tap_outside: false,
  ux_mode: 'popup',
  use_fedcm_for_prompt: true,
  use_fedcm_for_button: true,
  context: 'signin',
};
