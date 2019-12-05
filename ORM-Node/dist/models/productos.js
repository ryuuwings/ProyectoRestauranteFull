"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _detalles = _interopRequireDefault(require("./detalles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Productos = _database.sequelize.define('producto', {
  idplato: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  tamaño: {
    type: _sequelize["default"].TEXT
  },
  nombreplato: {
    type: _sequelize["default"].TEXT
  },
  alérgenos: {
    type: _sequelize["default"].TEXT
  },
  descripcion: {
    type: _sequelize["default"].TEXT
  },
  infonutricional: {
    type: _sequelize["default"].TEXT
  },
  precio: {
    type: _sequelize["default"].REAL
  },
  tipo: {
    type: _sequelize["default"].TEXT
  },
  imagenidimagen: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false,
  freezeTableName: true
});

Productos.hasMany(_detalles["default"], {
  foreignKey: 'platoidplato',
  sourceKey: 'idplato'
});

_detalles["default"].belongsTo(Productos, {
  foreignKey: 'platoidplato',
  sourceKey: 'idplato'
});

var _default = Productos;
exports["default"] = _default;