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
    id: 'user-interface',
    title: 'User Interface',
    subtitle: 'Building blocks of the UI & UX',
    type: 'group',
    icon: 'heroicons-outline:collection',
    children: [
      {
        id: 'user-interface.tailwindcss',
        title: 'TailwindCSS',
        type: 'item',
        icon: 'heroicons-outline:sparkles',
        url: '/ui/tailwindcss',
      },
      {
        id: 'user-interface.icons',
        title: 'Icons',
        type: 'collapse',
        icon: 'heroicons-outline:lightning-bolt',
        children: [
          {
            id: 'user-interface.icons.heroicons-outline',
            title: 'Heroicons Outline',
            type: 'item',
            url: '/ui/icons/heroicons/outline',
          },
          {
            id: 'user-interface.icons.heroicons-solid',
            title: 'Heroicons Solid',
            type: 'item',
            url: '/ui/icons/heroicons/solid',
          },
          {
            id: 'user-interface.icons.material-twotone',
            title: 'Material Twotone',
            type: 'item',
            url: '/ui/icons/material/twotone',
          },
          {
            id: 'user-interface.icons.material-outline',
            title: 'Material Outline',
            type: 'item',
            url: '/ui/icons/material/outline',
          },
          {
            id: 'user-interface.icons.material-solid',
            title: 'Material Solid',
            type: 'item',
            url: '/ui/icons/material/solid',
          },
          {
            id: 'user-interface.icons.feather',
            title: 'Feather',
            type: 'item',
            url: '/ui/icons/feather',
          },
        ],
      },
      {
        id: 'user-interface.page-layouts',
        title: 'Page Layouts',
        type: 'collapse',
        icon: 'heroicons-outline:template',
        children: [
          {
            id: 'user-interface.page-layouts.overview',
            title: 'Overview',
            type: 'item',
            url: '/ui/page-layouts/overview',
          },
          {
            id: 'user-interface.page-layouts.carded',
            title: 'Carded',
            type: 'collapse',
            children: [
              {
                id: 'user-interface.page-layouts.carded.full-width',
                title: 'Full Width',
                type: 'collapse',
                url: '/ui/page-layouts/carded/full-width',
                children: [
                  {
                    id: 'user-interface.page-layouts.carded.full-width.overview',
                    title: 'Full Width Overview',
                    type: 'item',
                    url: '/ui/page-layouts/carded/full-width/overview',
                  },
                  {
                    id: 'user-interface.page-layouts.carded.full-width.normal-scroll',
                    title: 'Full Width Normal Scroll',
                    type: 'item',
                    url: '/ui/page-layouts/carded/full-width/normal-scroll',
                  },
                  {
                    id: 'user-interface.page-layouts.carded.full-width.page-scroll',
                    title: 'Full Width Page Scroll',
                    type: 'item',
                    url: '/ui/page-layouts/carded/full-width/page-scroll',
                  },
                  {
                    id: 'user-interface.page-layouts.carded.full-width.content-scroll',
                    title: 'Full Width Content Scroll',
                    type: 'item',
                    url: '/ui/page-layouts/carded/full-width/content-scroll',
                  },
                ],
              },
              {
                id: 'user-interface.page-layouts.carded.with-sidebars',
                title: 'With Sidebars',
                type: 'collapse',
                url: '/ui/page-layouts/carded/with-sidebars',
                children: [
                  {
                    id: 'user-interface.page-layouts.carded.with-sidebars.overview',
                    title: 'With Sidebars Overview',
                    type: 'item',
                    url: '/ui/page-layouts/carded/with-sidebars/overview',
                  },
                  {
                    id: 'user-interface.page-layouts.carded.with-sidebars.normal-scroll',
                    title: 'With Sidebars Normal Scroll',
                    type: 'item',
                    url: '/ui/page-layouts/carded/with-sidebars/normal-scroll',
                  },
                  {
                    id: 'user-interface.page-layouts.carded.with-sidebars.page-scroll',
                    title: 'With Sidebars Page Scroll',
                    type: 'item',
                    url: '/ui/page-layouts/carded/with-sidebars/page-scroll',
                  },
                  {
                    id: 'user-interface.page-layouts.carded.with-sidebars.content-scroll',
                    title: 'With Sidebars Content Scroll',
                    type: 'item',
                    url: '/ui/page-layouts/carded/with-sidebars/content-scroll',
                  },
                ],
              },
            ],
          },
          {
            id: 'user-interface.page-layouts.simple',
            title: 'Simple',
            type: 'collapse',
            children: [
              {
                id: 'user-interface.page-layouts.simple.full-width',
                title: 'Full Width',
                type: 'collapse',
                url: '/ui/page-layouts/simple/full-width',
                children: [
                  {
                    id: 'user-interface.page-layouts.simple.full-width.overview',
                    title: 'Full Width Overview',
                    type: 'item',
                    url: '/ui/page-layouts/simple/full-width/overview',
                  },
                  {
                    id: 'user-interface.page-layouts.simple.full-width.normal-scroll',
                    title: 'Full Width Normal Scroll',
                    type: 'item',
                    url: '/ui/page-layouts/simple/full-width/normal-scroll',
                  },
                  {
                    id: 'user-interface.page-layouts.simple.full-width.page-scroll',
                    title: 'Full Width Page Scroll',
                    type: 'item',
                    url: '/ui/page-layouts/simple/full-width/page-scroll',
                  },
                  {
                    id: 'user-interface.page-layouts.simple.full-width.content-scroll',
                    title: 'Full Width Content Scroll',
                    type: 'item',
                    url: '/ui/page-layouts/simple/full-width/content-scroll',
                  },
                ],
              },
              {
                id: 'user-interface.page-layouts.simple.with-sidebars',
                title: 'With Sidebars',
                type: 'collapse',
                url: '/ui/page-layouts/simple/with-sidebars',
                children: [
                  {
                    id: 'user-interface.page-layouts.simple.with-sidebars.overview',
                    title: 'With Sidebars Overview',
                    type: 'item',
                    url: '/ui/page-layouts/simple/with-sidebars/overview',
                  },
                  {
                    id: 'user-interface.page-layouts.simple.with-sidebars.normal-scroll',
                    title: 'With Sidebars Normal Scroll',
                    type: 'item',
                    url: '/ui/page-layouts/simple/with-sidebars/normal-scroll',
                  },
                  {
                    id: 'user-interface.page-layouts.simple.with-sidebars.page-scroll',
                    title: 'With Sidebars Page Scroll',
                    type: 'item',
                    url: '/ui/page-layouts/simple/with-sidebars/page-scroll',
                  },
                  {
                    id: 'user-interface.page-layouts.simple.with-sidebars.content-scroll',
                    title: 'With Sidebars Content Scroll',
                    type: 'item',
                    url: '/ui/page-layouts/simple/with-sidebars/content-scroll',
                  },
                ],
              },
            ],
          },
          {
            id: 'user-interface.page-layouts.empty',
            title: 'Empty Page',
            type: 'item',
            url: '/ui/page-layouts/empty',
          },
        ],
      },
      {
        id: 'user-interface.typography',
        title: 'Typography',
        type: 'item',
        icon: 'heroicons-outline:pencil',
        url: '/ui/typography',
      },
    ],
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
