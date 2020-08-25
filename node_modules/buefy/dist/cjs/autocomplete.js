'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-14c82365.js');
require('./helpers.js');
require('./chunk-691abc80.js');
require('./chunk-e0c6812b.js');
require('./chunk-260fdf10.js');
var __chunk_5 = require('./chunk-13e039f5.js');
require('./chunk-55b9ba17.js');
var __chunk_7 = require('./chunk-cc67b9a8.js');

var Plugin = {
  install: function install(Vue) {
    __chunk_5.registerComponent(Vue, __chunk_7.Autocomplete);
  }
};
__chunk_5.use(Plugin);

exports.BAutocomplete = __chunk_7.Autocomplete;
exports.default = Plugin;
