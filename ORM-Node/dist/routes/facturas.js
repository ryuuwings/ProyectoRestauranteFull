"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _facturas = require("../controllers/facturas.controller");

var router = (0, _express.Router)(); //api/facturas

router.post('/', _facturas.createBill);
router.get('/', _facturas.getBills); //api/facturas/:id

router.get('/:id', _facturas.getOneBill);
router["delete"]('/:id', _facturas.deleteOneBill);
router.put('/:id', _facturas.updateOneBill); //api/facturas/clientes/:clienteidcliente

router.get('/clientes/:clienteidcliente', _facturas.getBillsByClient); //api/facturas/mesas/:mesaidmesa

router.get('/mesas/:mesaidmesa', _facturas.getBillsByTable); //api/facturas/camareros/:camareroidcamarero

router.get('/camareros/:camareroidcamarero', _facturas.getBillsByWaiter);
var _default = router;
exports["default"] = _default;