import { AccountMenuItem } from './account-menu.models';

export const ACCOUNT_MENU_ITEMS: AccountMenuItem[] = [
  {
    icon: 'person',
    label: 'My Account',
    route: '/profile',
  },
  {
    icon: 'settings',
    label: 'Settings',
    route: '/settings',
  },
  {
    icon: 'help',
    label: 'Help',
    route: '/help',
  },
  {
    icon: 'feedback',
    label: 'Feedback',
    route: '/feedback',
  },
  {
    icon: 'logout',
    label: 'Log out',
    route: '/auth',
  },
];
