import { lazy } from 'react';

const MainAthletesApp = lazy(() => import('./MainAthletesApp'));

const MainAthletesAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'athletes/main',
      element: <MainAthletesApp />,
    },
  ],
};

export default MainAthletesAppConfig;
