"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createClient = createClient;
exports.getClients = getClients;
exports.getOneClient = getOneClient;
exports.deleteOneClient = deleteOneClient;
exports.updateOneClient = updateOneClient;

var _clientes = _interopRequireDefault(require("../models/clientes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createClient(req, res) {
  var _req$body, nombre, apellido1, apellido2, newClient;

  return regeneratorRuntime.async(function createClient$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, nombre = _req$body.nombre, apellido1 = _req$body.apellido1, apellido2 = _req$body.apellido2;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(_clientes["default"].create({
            nombre: nombre,
            apellido1: apellido1,
            apellido2: apellido2
          }, {
            fields: ['nombre', 'apellido1', 'apellido2']
          }));

        case 4:
          newClient = _context.sent;

          if (!newClient) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", res.json({
            message: 'Client registered',
            data: newClient
          }));

        case 7:
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);
          res.status(500).json({
            message: 'Something went wrong, client not registered',
            data: {}
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 9]]);
}

function getClients(req, res) {
  var clientes;
  return regeneratorRuntime.async(function getClients$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_clientes["default"].findAll());

        case 3:
          clientes = _context2.sent;
          res.json({
            data: clientes
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

function getOneClient(req, res) {
  var id, cliente;
  return regeneratorRuntime.async(function getOneClient$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id;
          _context3.next = 4;
          return regeneratorRuntime.awrap(_clientes["default"].findOne({
            where: {
              idcliente: id
            }
          }));

        case 4:
          cliente = _context3.sent;
          res.json({
            data: cliente
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

function deleteOneClient(req, res) {
  var id, deletedClientRows;
  return regeneratorRuntime.async(function deleteOneClient$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _context4.next = 4;
          return regeneratorRuntime.awrap(_clientes["default"].destroy({
            where: {
              idcliente: id
            }
          }));

        case 4:
          deletedClientRows = _context4.sent;
          res.json({
            message: 'Deleted client',
            count: deletedClientRows
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

function updateOneClient(req, res) {
  var id, _req$body2, nombre, apellido1, apellido2, cliente;

  return regeneratorRuntime.async(function updateOneClient$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          id = req.params.id;
          _req$body2 = req.body, nombre = _req$body2.nombre, apellido1 = _req$body2.apellido1, apellido2 = _req$body2.apellido2;
          _context6.next = 5;
          return regeneratorRuntime.awrap(_clientes["default"].findAll({
            attributes: ['idcliente', 'nombre', 'apellido1', 'apellido2'],
            where: {
              idcliente: id
            }
          }));

        case 5:
          cliente = _context6.sent;

          if (cliente.length > 0) {
            cliente.forEach(function _callee(cliente) {
              return regeneratorRuntime.async(function _callee$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return regeneratorRuntime.awrap(cliente.update({
                        nombre: nombre,
                        apellido1: apellido1,
                        apellido2: apellido2
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
            message: 'Client updated!',
            data: cliente
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