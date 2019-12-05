"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _clientes = _interopRequireDefault(require("./routes/clientes"));

var _mesas = _interopRequireDefault(require("./routes/mesas"));

var _camareros = _interopRequireDefault(require("./routes/camareros"));

var _productos = _interopRequireDefault(require("./routes/productos"));

var _detalles = _interopRequireDefault(require("./routes/detalles"));

var _facturas = _interopRequireDefault(require("./routes/facturas"));

var _imagenes = _interopRequireDefault(require("./routes/imagenes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//Importing routes
//initialization
var app = (0, _express["default"])(); //Middlewares

app.use((0, _morgan["default"])('dev'));
app.use((0, _express.json)());

var cors = require('cors');

app.use(cors()); //routes

app.use('/api/clientes', _clientes["default"]);
app.use('/api/mesas', _mesas["default"]);
app.use('/api/camareros', _camareros["default"]);
app.use('/api/productos', _productos["default"]);
app.use('/api/facturas', _facturas["default"]);
app.use('/api/detalles', _detalles["default"]);
app.use('/api/imagenes', _imagenes["default"]);
var _default = app;
exports["default"] = _default;