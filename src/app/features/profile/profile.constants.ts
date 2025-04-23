import { MenuItem, PrimeIcons } from 'primeng/api';

export const PROFILE_SIDE_MENU: MenuItem[] = [
  {
    label: 'Profile',
    icon: PrimeIcons.USER,
    routerLinkActiveOptions: { exact: true },
    routerLink: '/profile',
  },
  {
    label: 'Pets',
    icon: PrimeIcons.ANDROID,
    routerLink: '/pets',
  },
  {
    label: 'Examples',
    icon: PrimeIcons.EXTERNAL_LINK,
    items: [
      {
        label: 'External Angular',
        icon: PrimeIcons.STAR,
        url: 'https://angular.io/',
      },
      {
        label: 'Internal - Installation',
        icon: PrimeIcons.ERASER,
        route: '/installation',
      },
      {
        label: 'No link',
        icon: PrimeIcons.LINK,
      },
    ],
  },
];
