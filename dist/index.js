#!/usr/bin/env node
'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _makeNg4Environment = require('./makeNg4Environment');

var _makeNg4Environment2 = _interopRequireDefault(_makeNg4Environment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.arguments('<filepath>').action(_makeNg4Environment2.default).parse(process.argv);