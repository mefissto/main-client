import { RouteNames } from '@core/configs/route-names.config';
import { MenuItem } from '@interfaces';

export const PROFILE_SIDE_MENU: MenuItem[] = [
  {
    label: 'Profile',
    icon: 'person',
    routerLink: `/${RouteNames.profileOverview}`,
  },
  {
    label: 'Pets',
    icon: 'pets',
    routerLink: `/${RouteNames.profilePets}`,
  },
  {
    label: 'Examples',
    icon: 'pets',
    items: [
      {
        label: 'External Angular',
        icon: 'pets',
        url: 'https://angular.io/',
      },
      {
        label: 'Internal - Installation',
        icon: 'pets',
        route: '/installation',
      },
      {
        label: 'No link',
        icon: 'pets',
      },
    ],
  },
];
