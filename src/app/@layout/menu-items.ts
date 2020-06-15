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
    title: 'App Users',
    link: '/users',
  },
  {
    title: 'Agents',
    link: '/agents',
  },
  {
    title: 'Sites',
    link: '/sites',
  },
  {
    title: 'Devices',
    icon: 'save-outline',
    children: [
      {
        title: 'Gateways',
        link: '/devices/gateways'
      },
      {
        title: 'Tapwater',
        link: '/devices/tapwater'
      },
      {
        title: 'Sensors',
        link: '/devices/sensors'
      },
      {
        title: 'Wristbands',
        link: '/devices/wristbands'
      }
    ]
  }
];
