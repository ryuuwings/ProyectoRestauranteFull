"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDetails = createDetails;
exports.getDetails = getDetails;
exports.getOneDetail = getOneDetail;
exports.deleteOneDetail = deleteOneDetail;
exports.updateOneDetail = updateOneDetail;
exports.getDetailsByBill = getDetailsByBill;
exports.getDetailsByProduct = getDetailsByProduct;

var _detalles = _interopRequireDefault(require("../models/detalles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createDetails(req, res) {
  var _req$body, facturaidfactura, platoidplato, nota, newDetalle;

  return regeneratorRuntime.async(function createDetails$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, facturaidfactura = _req$body.facturaidfactura, platoidplato = _req$body.platoidplato, nota = _req$body.nota;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(_detalles["default"].create({
            facturaidfactura: facturaidfactura,
            platoidplato: platoidplato,
            nota: nota
          }, {
            fields: ['facturaidfactura', 'platoidplato', 'nota']
          }));

        case 4:
          newDetalle = _context.sent;

          if (!newDetalle) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", res.json({
            message: 'Detail registered',
            data: newDetalle
          }));

        case 7:
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);
          res.status(500).json({
            message: 'Something went wrong, product not registered',
            data: {}
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 9]]);
}

function getDetails(req, res) {
  var detalles;
  return regeneratorRuntime.async(function getDetails$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_detalles["default"].findAll());

        case 3:
          detalles = _context2.sent;
          res.json({
            data: detalles
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

function getOneDetail(req, res) {
  var id, detalle;
  return regeneratorRuntime.async(function getOneDetail$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id;
          _context3.next = 4;
          return regeneratorRuntime.awrap(_detalles["default"].findOne({
            where: {
              iddetalles: id
            }
          }));

        case 4:
          detalle = _context3.sent;
          res.json({
            data: detalle
          });
          _context3.next = 12;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          res.status(500).json({
            message: 'Something went wrong, product not registered',
            data: {}
          });

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
}

function deleteOneDetail(req, res) {
  var id, deletedDetailRows;
  return regeneratorRuntime.async(function deleteOneDetail$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _context4.next = 4;
          return regeneratorRuntime.awrap(_detalles["default"].destroy({
            where: {
              iddetalles: id
            }
          }));

        case 4:
          deletedDetailRows = _context4.sent;
          res.json({
            message: 'Deleted detail',
            count: deletedDetailRows
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

function updateOneDetail(req, res) {
  var id, _req$body2, facturaidfactura, platoidplato, nota, detalle;

  return regeneratorRuntime.async(function updateOneDetail$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          id = req.params.id;
          _req$body2 = req.body, facturaidfactura = _req$body2.facturaidfactura, platoidplato = _req$body2.platoidplato, nota = _req$body2.nota;
          _context6.next = 5;
          return regeneratorRuntime.awrap(_detalles["default"].findAll({
            attributes: ['iddetalles', 'facturaidfactura', 'platoidplato', 'nota'],
            where: {
              iddetalles: id
            }
          }));

        case 5:
          detalle = _context6.sent;

          if (detalle.length > 0) {
            detalle.forEach(function _callee(detalle) {
              return regeneratorRuntime.async(function _callee$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return regeneratorRuntime.awrap(detalle.update({
                        facturaidfactura: facturaidfactura,
                        platoidplato: platoidplato,
                        nota: nota
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
            message: 'Detail updated!',
            data: detalle
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

function getDetailsByBill(req, res) {
  var facturaidfactura, detalles;
  return regeneratorRuntime.async(function getDetailsByBill$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          facturaidfactura = req.params.facturaidfactura;
          _context7.next = 3;
          return regeneratorRuntime.awrap(_detalles["default"].findAll({
            attributes: ['iddetalles', 'facturaidfactura', 'platoidplato', 'nota'],
            where: {
              facturaidfactura: facturaidfactura
            }
          }));

        case 3:
          detalles = _context7.sent;
          res.json({
            detalles: detalles
          });

        case 5:
        case "end":
          return _context7.stop();
      }
    }
  });
}

function getDetailsByProduct(req, res) {
  var platoidplato, detalles;
  return regeneratorRuntime.async(function getDetailsByProduct$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          platoidplato = req.params.platoidplato;
          _context8.next = 3;
          return regeneratorRuntime.awrap(_detalles["default"].findAll({
            attributes: ['iddetalles', 'facturaidfactura', 'platoidplato', 'nota'],
            where: {
              platoidplato: platoidplato
            }
          }));

        case 3:
          detalles = _context8.sent;
          res.json({
            detalles: detalles
          });

        case 5:
        case "end":
          return _context8.stop();
      }
    }
  });
}