import maintenancePageConfig from './maintenance/maintenancePageConfig';
import authenticationPagesConfig from './authentication/authenticationPagesConfig';
import comingSoonPagesConfig from './coming-soon/comingSoonPagesConfig';
import errorPagesConfig from './error/errorPagesConfig';
import searchPagesConfig from './search/searchPagesConfig';

const pagesConfigs = [
  ...authenticationPagesConfig,
  comingSoonPagesConfig,
  errorPagesConfig,
  maintenancePageConfig,
  searchPagesConfig,
];

export default pagesConfigs;
