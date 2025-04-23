import { MenuItem, PrimeIcons } from 'primeng/api';

import { RouteNames } from '@core/configs/route-names.config';

export const ACCOUNT_MENU_ITEMS: MenuItem[] = [
  {
    icon: PrimeIcons.USER,
    label: 'My Account',
    route: `/${RouteNames.profile}`,
  },
  {
    icon: PrimeIcons.COG,
    label: 'Settings',
    route: `/${RouteNames.settings}`,
  },
  {
    icon: PrimeIcons.QUESTION_CIRCLE,
    label: 'Help',
    route: `/${RouteNames.help}`,
  },
  {
    icon: PrimeIcons.COMMENTS,
    label: 'Feedback',
    route: `/${RouteNames.feedback}`,
  },
  {
    icon: PrimeIcons.SIGN_OUT,
    label: 'Log out',
    route: `/${RouteNames.authLogout}`,
  },
];
