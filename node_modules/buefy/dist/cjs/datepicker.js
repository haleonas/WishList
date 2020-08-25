'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-14c82365.js');
require('./helpers.js');
require('./chunk-691abc80.js');
require('./chunk-e0c6812b.js');
require('./chunk-260fdf10.js');
var __chunk_5 = require('./chunk-13e039f5.js');
require('./chunk-55b9ba17.js');
require('./chunk-7c1943f0.js');
require('./chunk-ae7e641a.js');
require('./chunk-efc3bb0d.js');
require('./chunk-591dd952.js');
require('./chunk-0d83b3ee.js');
var __chunk_16 = require('./chunk-2e406bf6.js');

var Plugin = {
  install: function install(Vue) {
    __chunk_5.registerComponent(Vue, __chunk_16.Datepicker);
  }
};
__chunk_5.use(Plugin);

exports.BDatepicker = __chunk_16.Datepicker;
exports.default = Plugin;
