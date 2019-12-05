"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Detalles = _database.sequelize.define('detallesfactura', {
  iddetalles: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  facturaidfactura: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  platoidplato: {
    type: _sequelize["default"].INTEGER
  },
  nota: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false,
  freezeTableName: true
});

var _default = Detalles;
exports["default"] = _default;