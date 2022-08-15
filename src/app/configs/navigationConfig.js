import i18next from 'i18next';

import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    subtitle: 'Main page',
    type: 'item',
    icon: 'material-outline:dashboard',
    url: '/dashboards/project',
  },
  {
    id: 'wallet',
    title: 'Wallet',
    subtitle: 'Wallet',
    type: 'item',
    icon: 'material-outline:account_balance_wallet',
    url: '/wallet/main',
  },
  {
    id: 'athlete',
    title: 'Athlete',
    subtitle: 'Interaction with the athlete ecosystem',
    type: 'group',
    icon: 'material-outline:sports_baseball',
    children: [
      {
        id: 'athletes.main',
        title: 'Athletes',
        type: 'item',
        icon: 'material-outline:apps',
        url: '/athletes/main',
      },
      {
        id: 'athletes.market',
        title: 'Market',
        type: 'item',
        icon: 'material-outline:assessment',
        url: '/ui/tailwindcss',
      },
      {
        id: 'athletes.coach',
        title: 'Coach',
        type: 'item',
        icon: 'material-outline:assignment',
        url: '/ui/tailwindcss',
      },
      {
        id: 'athletes.sponsorship',
        title: 'Sponsorship',
        type: 'item',
        icon: 'material-outline:motion_photos_auto',
        url: '/ui/tailwindcss',
      },
    ],
  },
  {
    id: 'governance',
    title: 'Govern',
    subtitle: 'Govern',
    type: 'group',
    icon: 'material-outline:account_balance',
    url: '/governance',
  },
  {
    id: 'divider-1',
    type: 'divider',
  },
  {
    id: 'support',
    title: 'Support',
    subtitle: 'Support',
    type: 'group',
    icon: 'material-outline:support',
    url: '/support',
  },
  {
    type: 'divider',
    id: 'divider-2',
  },
];

export default navigationConfig;
