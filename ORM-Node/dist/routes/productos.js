"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _producto = require("../controllers/producto.controller");

var router = (0, _express.Router)(); // /api/productos

router.get('/', _producto.getProducts);
router.post('/', _producto.createProduct); // /api/productos/:id

router.get('/:id', _producto.getOneProduct);
router["delete"]('/:id', _producto.deleteOneProduct);
router.put('/:id', _producto.updateOneProduct);
var _default = router;
exports["default"] = _default;