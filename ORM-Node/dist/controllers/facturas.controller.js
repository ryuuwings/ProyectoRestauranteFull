"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBill = createBill;
exports.getBills = getBills;
exports.getOneBill = getOneBill;
exports.deleteOneBill = deleteOneBill;
exports.updateOneBill = updateOneBill;
exports.getBillsByClient = getBillsByClient;
exports.getBillsByTable = getBillsByTable;
exports.getBillsByWaiter = getBillsByWaiter;

var _facturas = _interopRequireDefault(require("../models/facturas"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createBill(req, res) {
  var _req$body, clienteidcliente, mesaidmesa, fechafactura, camareroidcamarero, newFactura;

  return regeneratorRuntime.async(function createBill$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, clienteidcliente = _req$body.clienteidcliente, mesaidmesa = _req$body.mesaidmesa, fechafactura = _req$body.fechafactura, camareroidcamarero = _req$body.camareroidcamarero;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(_facturas["default"].create({
            clienteidcliente: clienteidcliente,
            mesaidmesa: mesaidmesa,
            fechafactura: fechafactura,
            camareroidcamarero: camareroidcamarero
          }, {
            fields: ['clienteidcliente', 'mesaidmesa', 'fechafactura', 'camareroidcamarero']
          }));

        case 4:
          newFactura = _context.sent;

          if (!newFactura) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", res.json({
            message: 'Bill registered',
            data: newFactura
          }));

        case 7:
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);
          res.status(500).json({
            message: 'Something went wrong, bill not registered',
            data: {}
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 9]]);
}

function getBills(req, res) {
  var bills;
  return regeneratorRuntime.async(function getBills$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_facturas["default"].findAll({
            attributes: ['idfactura', 'clienteidcliente', 'mesaidmesa', 'fechafactura', 'camareroidcamarero']
          }));

        case 3:
          bills = _context2.sent;
          res.json({
            bills: bills
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

function getOneBill(req, res) {
  var id, factura;
  return regeneratorRuntime.async(function getOneBill$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id;
          _context3.next = 4;
          return regeneratorRuntime.awrap(_facturas["default"].findOne({
            attributes: ['idfactura', 'clienteidcliente', 'mesaidmesa', 'fechafactura', 'camareroidcamarero'],
            where: {
              idfactura: id
            }
          }));

        case 4:
          factura = _context3.sent;
          res.json({
            data: factura
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

function deleteOneBill(req, res) {
  var id, deletedBillRows;
  return regeneratorRuntime.async(function deleteOneBill$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _context4.next = 4;
          return regeneratorRuntime.awrap(_facturas["default"].destroy({
            where: {
              idfactura: id
            }
          }));

        case 4:
          deletedBillRows = _context4.sent;
          res.json({
            message: 'Deleted bill',
            count: deletedBillRows
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

function updateOneBill(req, res) {
  var id, _req$body2, clienteidcliente, mesaidmesa, fechafactura, camareroidcamarero, factura;

  return regeneratorRuntime.async(function updateOneBill$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          id = req.params.id;
          _req$body2 = req.body, clienteidcliente = _req$body2.clienteidcliente, mesaidmesa = _req$body2.mesaidmesa, fechafactura = _req$body2.fechafactura, camareroidcamarero = _req$body2.camareroidcamarero;
          _context6.next = 5;
          return regeneratorRuntime.awrap(_facturas["default"].findAll({
            attributes: ['idfactura', 'clienteidcliente', 'mesaidmesa', 'fechafactura', 'camareroidcamarero'],
            where: {
              idfactura: id
            }
          }));

        case 5:
          factura = _context6.sent;
          console.log(factura);

          if (factura.length > 0) {
            factura.forEach(function _callee(factura) {
              return regeneratorRuntime.async(function _callee$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return regeneratorRuntime.awrap(factura.update({
                        clienteidcliente: clienteidcliente,
                        mesaidmesa: mesaidmesa,
                        fechafactura: fechafactura,
                        camareroidcamarero: camareroidcamarero
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
            message: 'Table updated!',
            data: factura
          }));

        case 11:
          _context6.prev = 11;
          _context6.t0 = _context6["catch"](0);

        case 13:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 11]]);
}

function getBillsByClient(req, res) {
  var clienteidcliente, facturas;
  return regeneratorRuntime.async(function getBillsByClient$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          clienteidcliente = req.params.clienteidcliente;
          _context7.next = 3;
          return regeneratorRuntime.awrap(_facturas["default"].findAll({
            attributes: ['idfactura', 'clienteidcliente', 'mesaidmesa', 'fechafactura', 'camareroidcamarero'],
            where: {
              clienteidcliente: clienteidcliente
            }
          }));

        case 3:
          facturas = _context7.sent;
          res.json({
            facturas: facturas
          });

        case 5:
        case "end":
          return _context7.stop();
      }
    }
  });
}

function getBillsByTable(req, res) {
  var mesaidmesa, facturas;
  return regeneratorRuntime.async(function getBillsByTable$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          mesaidmesa = req.params.mesaidmesa;
          _context8.next = 3;
          return regeneratorRuntime.awrap(_facturas["default"].findAll({
            attributes: ['idfactura', 'clienteidcliente', 'mesaidmesa', 'fechafactura', 'camareroidcamarero'],
            where: {
              mesaidmesa: mesaidmesa
            }
          }));

        case 3:
          facturas = _context8.sent;
          res.json({
            facturas: facturas
          });

        case 5:
        case "end":
          return _context8.stop();
      }
    }
  });
}

function getBillsByWaiter(req, res) {
  var camareroidcamarero, facturas;
  return regeneratorRuntime.async(function getBillsByWaiter$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          camareroidcamarero = req.params.camareroidcamarero;
          _context9.next = 3;
          return regeneratorRuntime.awrap(_facturas["default"].findAll({
            attributes: ['idfactura', 'clienteidcliente', 'mesaidmesa', 'fechafactura', 'camareroidcamarero'],
            where: {
              camareroidcamarero: camareroidcamarero
            }
          }));

        case 3:
          facturas = _context9.sent;
          res.json({
            facturas: facturas
          });

        case 5:
        case "end":
          return _context9.stop();
      }
    }
  });
}