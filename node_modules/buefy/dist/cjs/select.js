'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-14c82365.js');
require('./helpers.js');
require('./chunk-691abc80.js');
require('./chunk-e0c6812b.js');
require('./chunk-260fdf10.js');
var __chunk_5 = require('./chunk-13e039f5.js');
var __chunk_15 = require('./chunk-0d83b3ee.js');

var Plugin = {
  install: function install(Vue) {
    __chunk_5.registerComponent(Vue, __chunk_15.Select);
  }
};
__chunk_5.use(Plugin);

exports.BSelect = __chunk_15.Select;
exports.default = Plugin;
