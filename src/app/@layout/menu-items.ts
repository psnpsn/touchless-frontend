import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'search-outline',
    link: '/dashboard',
    home: true,
  },
  {
    title: 'Map',
    icon: 'home-outline',
    link: '/map',
  },
  {
    title: 'Database',
    icon: 'save-outline',
    children: [
      {
        title: 'Users',
        link: '/db/users',
      },
      {
        title: 'Pupils',
        link: '/db/pupils',
      },
      {
        title: 'Taps',
        link: '/db/taps',
      },
    ],
  }
];
