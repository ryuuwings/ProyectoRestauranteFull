"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _clientes = require("../controllers/clientes.controller");

var router = (0, _express.Router)(); // /api/clientes/

router.get('/', _clientes.getClients);
router.post('/', _clientes.createClient); // /api/clientes/:id

router.get('/:id', _clientes.getOneClient);
router["delete"]('/:id', _clientes.deleteOneClient);
router.put('/:id', _clientes.updateOneClient);
var _default = router;
exports["default"] = _default;