"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _facturas = _interopRequireDefault(require("./facturas"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Mesas = _database.sequelize.define('mesa', {
  idmesa: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  ubicacion: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false,
  freezeTableName: true
});

Mesas.hasMany(_facturas["default"], {
  foreignKey: 'mesaidmesa',
  sourceKey: 'idmesa'
});

_facturas["default"].belongsTo(Mesas, {
  foreignKey: 'mesaidmesa',
  sourceKey: 'idmesa'
});

var _default = Mesas;
exports["default"] = _default;