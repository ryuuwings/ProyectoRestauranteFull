"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _productos = _interopRequireDefault(require("./productos"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Imagenes = _database.sequelize.define('imagen', {
  idimagen: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  ruta: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false,
  freezeTableName: true
});

Imagenes.hasMany(_productos["default"], {
  foreignKey: 'imagenidimagen',
  sourceKey: 'idimagen'
});

_productos["default"].belongsTo(Imagenes, {
  foreignKey: 'imagenidimagen',
  sourceKey: 'idimagen'
});

var _default = Imagenes;
exports["default"] = _default;