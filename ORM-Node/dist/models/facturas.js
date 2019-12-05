"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _detalles = _interopRequireDefault(require("./detalles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Facturas = _database.sequelize.define('factura', {
  idfactura: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  clienteidcliente: {
    type: _sequelize["default"].INTEGER
  },
  mesaidmesa: {
    type: _sequelize["default"].INTEGER
  },
  fechafactura: {
    type: _sequelize["default"].DATE
  },
  camareroidcamarero: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false,
  freezeTableName: true
});

Facturas.hasMany(_detalles["default"], {
  foreignKey: 'facturaidfactura',
  sourceKey: 'idfactura'
});

_detalles["default"].belongsTo(Facturas, {
  foreignKey: 'facturaidfactura',
  sourceKey: 'idfactura'
});

var _default = Facturas;
exports["default"] = _default;