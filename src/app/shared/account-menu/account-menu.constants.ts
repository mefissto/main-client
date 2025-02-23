import { MenuItem } from '@core/interfaces/menu-item.interface';

export const ACCOUNT_MENU_ITEMS: MenuItem[] = [
  {
    icon: 'pi-user',
    label: 'My Account',
    route: '/profile',
  },
  {
    icon: 'pi-cog',
    label: 'Settings',
    route: '/settings',
  },
  {
    icon: 'pi-question-circle',
    label: 'Help',
    route: '/help',
  },
  {
    icon: 'pi-comments',
    label: 'Feedback',
    route: '/feedback',
  },
  {
    icon: 'pi-sign-out',
    label: 'Log out',
    route: '/auth/logout',
  },
];
