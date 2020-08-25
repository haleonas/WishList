import './chunk-1fafdf15.js';
import './helpers.js';
import './chunk-f134e057.js';
import { r as registerComponent, u as use } from './chunk-cca88db8.js';
import { T as Tooltip } from './chunk-1252e7e2.js';
export { T as BTooltip } from './chunk-1252e7e2.js';

var Plugin = {
  install: function install(Vue) {
    registerComponent(Vue, Tooltip);
  }
};
use(Plugin);

export default Plugin;
