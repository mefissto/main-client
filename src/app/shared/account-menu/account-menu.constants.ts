import { RouteNames } from '@core/configs/route-names.config';
import { MenuItem } from '@core/interfaces/menu-item.interface';

export const ACCOUNT_MENU_ITEMS: MenuItem[] = [
  {
    icon: 'pi-user',
    label: 'My Account',
    route: `/${RouteNames.userProfile}`,
  },
  {
    icon: 'pi-cog',
    label: 'Settings',
    route: `/${RouteNames.settings}`,
  },
  {
    icon: 'pi-question-circle',
    label: 'Help',
    route: `/${RouteNames.help}`,
  },
  {
    icon: 'pi-comments',
    label: 'Feedback',
    route: `/${RouteNames.feedback}`,
  },
  {
    icon: 'pi-sign-out',
    label: 'Log out',
    route: `/${RouteNames.authLogout}`,
  },
];
