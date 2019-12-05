"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createImage = createImage;
exports.getImages = getImages;
exports.getOneImage = getOneImage;
exports.deleteOneImage = deleteOneImage;
exports.updateOneImage = updateOneImage;

var _imagenes = _interopRequireDefault(require("../models/imagenes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createImage(req, res) {
  var ruta, newImagen;
  return regeneratorRuntime.async(function createImage$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          ruta = req.body.ruta;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(_imagenes["default"].create({
            ruta: ruta
          }, {
            fields: ['ruta']
          }));

        case 4:
          newImagen = _context.sent;

          if (!newMesa) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", res.json({
            message: 'Image registered',
            data: newImagen
          }));

        case 7:
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);
          res.status(500).json({
            message: 'Something went wrong, image not registered',
            data: {}
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 9]]);
}

function getImages(req, res) {
  var imagenes;
  return regeneratorRuntime.async(function getImages$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_imagenes["default"].findAll());

        case 3:
          imagenes = _context2.sent;
          res.json({
            data: imagenes
          });
          _context2.next = 9;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
}

function getOneImage(req, res) {
  var id, imagen;
  return regeneratorRuntime.async(function getOneImage$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id;
          _context3.next = 4;
          return regeneratorRuntime.awrap(_imagenes["default"].findOne({
            where: {
              idimagen: id
            }
          }));

        case 4:
          imagen = _context3.sent;
          res.json({
            data: imagen
          });
          _context3.next = 10;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
}

function deleteOneImage(req, res) {
  var id, deletedImageRows;
  return regeneratorRuntime.async(function deleteOneImage$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _context4.next = 4;
          return regeneratorRuntime.awrap(_imagenes["default"].destroy({
            where: {
              idimagen: id
            }
          }));

        case 4:
          deletedImageRows = _context4.sent;
          res.json({
            message: 'Deleted image',
            count: deletedImageRows
          });
          _context4.next = 10;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 8]]);
}

function updateOneImage(req, res) {
  var id, ruta, imagen;
  return regeneratorRuntime.async(function updateOneImage$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          id = req.params.id;
          ruta = req.body.ruta;
          _context6.next = 5;
          return regeneratorRuntime.awrap(_imagenes["default"].findAll({
            attributes: ['idimagen', 'ruta'],
            where: {
              idimagen: id
            }
          }));

        case 5:
          imagen = _context6.sent;

          if (imagen.length > 0) {
            imagen.forEach(function _callee(imagen) {
              return regeneratorRuntime.async(function _callee$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return regeneratorRuntime.awrap(imagen.update({
                        ruta: ruta
                      }));

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              });
            });
          }

          return _context6.abrupt("return", res.json({
            message: 'Image updated!',
            data: imagen
          }));

        case 10:
          _context6.prev = 10;
          _context6.t0 = _context6["catch"](0);

        case 12:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 10]]);
}