"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _imagen = require("../controllers/imagen.controller");

var router = (0, _express.Router)(); //api/imagenes

router.post('/', _imagen.createImage);
router.get('/', _imagen.getImages); //api/imagenes/:id

router.get('/:id', _imagen.getOneImage);
router["delete"]('/:id', _imagen.deleteOneImage);
router.put('/:id', _imagen.updateOneImage);
var _default = router;
exports["default"] = _default;