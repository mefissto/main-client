import { MenuItem } from '@interfaces';

export const PROFILE_SIDE_MENU: MenuItem[] = [
  {
    label: 'Profile',
    icon: 'person',
    routerLinkActiveOptions: { exact: true },
    routerLink: '/profile',
  },
  {
    label: 'Pets',
    icon: 'pets',
    routerLink: '/pets',
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
