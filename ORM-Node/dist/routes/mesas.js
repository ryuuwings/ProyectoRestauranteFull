"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _mesas = require("../controllers/mesas.controller");

var router = (0, _express.Router)(); // /api/mesas

router.get('/', _mesas.getTables);
router.post('/', _mesas.createTable); // /api/mesas/:id

router.get('/:id', _mesas.getOneTable);
router["delete"]('/:id', _mesas.deleteOneTable);
router.put('/:id', _mesas.updateOneTable);
var _default = router;
exports["default"] = _default;