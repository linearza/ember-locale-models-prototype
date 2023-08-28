import usModel from './us';
import frModel from './fr';
import globalModel from './global';

const localeModels = {
  fr: frModel,
  us: usModel,
  global: globalModel,
};

export default localeModels[window.locale || 'global'];
