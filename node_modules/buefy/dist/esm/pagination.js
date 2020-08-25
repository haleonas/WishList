import './chunk-1fafdf15.js';
import './helpers.js';
import './chunk-f134e057.js';
import './chunk-7bcc5416.js';
import { r as registerComponent, u as use } from './chunk-cca88db8.js';
import { P as Pagination, a as PaginationButton } from './chunk-5425f0a4.js';
export { P as BPagination, a as BPaginationButton } from './chunk-5425f0a4.js';

var Plugin = {
  install: function install(Vue) {
    registerComponent(Vue, Pagination);
    registerComponent(Vue, PaginationButton);
  }
};
use(Plugin);

export default Plugin;
