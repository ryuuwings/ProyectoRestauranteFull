"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _detalles = require("../controllers/detalles.controller");

var router = (0, _express.Router)(); //api/detalles

router.post('/', _detalles.createDetails);
router.get('/', _detalles.getDetails); //api/detalles/:id

router.get('/:id', _detalles.getOneDetail);
router["delete"]('/:id', _detalles.deleteOneDetail);
router.put('/:id', _detalles.updateOneDetail); //api/detalles/facturas/:idfactura

router.get('/facturas/:facturaidfactura', _detalles.getDetailsByBill); //api/detalles/productos/:idproducto

router.get('/productos/:platoidplato', _detalles.getDetailsByProduct);
var _default = router;
exports["default"] = _default;