'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _rimraf = require('rimraf');

var _rimraf2 = _interopRequireDefault(_rimraf);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeNg4Environrment = function makeNg4Environrment() {
  var filepath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : './src/env.ts';
  var environmentVariables = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _dotenv2.default.config().parsed;
  return (0, _rimraf2.default)(filepath, {}, function (deleteError) {
    return deleteError || _fs2.default.writeFile(filepath, 'export const environment = ' + JSON.stringify(environmentVariables), function (error) {
      if (error) throw error;
    });
  });
};

exports.default = makeNg4Environrment;