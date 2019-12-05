"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _facturas = _interopRequireDefault(require("./facturas"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Camareros = _database.sequelize.define('camarero', {
  idcamarero: {
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
  },
  contraseña: {
    type: _sequelize["default"].TEXT
  },
  email: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false,
  freezeTableName: true
});

Camareros.hasMany(_facturas["default"], {
  foreignKey: 'camareroidcamareo',
  sourceKey: 'idcamarero'
});

_facturas["default"].belongsTo(Camareros, {
  foreignKey: 'camareroidcamareo',
  sourceKey: 'idcamarero'
});

var _default = Camareros;
exports["default"] = _default;