"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _facturas = _interopRequireDefault(require("./facturas"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Clientes = _database.sequelize.define('cliente', {
  idcliente: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  nombre: {
    type: _sequelize["default"].TEXT
  },
  apellido1: {
    type: _sequelize["default"].TEXT
  },
  apellido2: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false,
  freezeTableName: true
});

Clientes.hasMany(_facturas["default"], {
  foreignKey: 'clienteidcliente',
  sourceKey: 'idcliente'
});

_facturas["default"].belongsTo(Clientes, {
  foreignKey: 'clienteidcliente',
  sourceKey: 'idcliente'
});

var _default = Clientes;
exports["default"] = _default;