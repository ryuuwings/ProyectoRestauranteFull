"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _camarero = require("../controllers/camarero.controller");

var router = (0, _express.Router)(); // /api/camareros/

router.get('/', _camarero.getWaiters);
router.post('/', _camarero.createWaiter); // /api/camareros/:id

router.get('/:id', _camarero.getOneWaiter);
router["delete"]('/:id', _camarero.deleteOneWaiter);
router.put('/:id', _camarero.updateOneWaiter);
var _default = router;
exports["default"] = _default;