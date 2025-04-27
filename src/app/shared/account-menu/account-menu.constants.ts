import { RouteNames } from '@core/configs/route-names.config';
import { MenuItem } from '@interfaces';

export const ACCOUNT_MENU_ITEMS: MenuItem[] = [
  {
    icon: 'person',
    label: 'My Account',
    route: `/${RouteNames.profile}`,
  },
  {
    icon: 'settings',
    label: 'Settings',
    route: `/${RouteNames.settings}`,
  },
  {
    icon: 'help',
    label: 'Help',
    route: `/${RouteNames.help}`,
  },
  {
    icon: 'chat',
    label: 'Feedback',
    route: `/${RouteNames.feedback}`,
  },
  {
    icon: 'logout',
    label: 'Log out',
    route: `/${RouteNames.authLogout}`,
  },
];
