"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createWaiter = createWaiter;
exports.getWaiters = getWaiters;
exports.getOneWaiter = getOneWaiter;
exports.deleteOneWaiter = deleteOneWaiter;
exports.updateOneWaiter = updateOneWaiter;

var _camareros = _interopRequireDefault(require("../models/camareros"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createWaiter(req, res) {
  var _req$body, nombre, apellido1, apellido2, contraseña, email, newCamarero;

  return regeneratorRuntime.async(function createWaiter$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, nombre = _req$body.nombre, apellido1 = _req$body.apellido1, apellido2 = _req$body.apellido2, contraseña = _req$body.contraseña, email = _req$body.email;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(_camareros["default"].create({
            nombre: nombre,
            apellido1: apellido1,
            apellido2: apellido2,
            contraseña: contraseña,
            email: email
          }, {
            fields: ['nombre', 'apellido1', 'apellido2', 'contraseña', 'email']
          }));

        case 4:
          newCamarero = _context.sent;

          if (!newCamarero) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", res.json({
            message: 'Waiter registered',
            data: newCamarero
          }));

        case 7:
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);
          res.status(500).json({
            message: 'Something went wrong, waiter not registered',
            data: {}
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 9]]);
}

function getWaiters(req, res) {
  var camareros;
  return regeneratorRuntime.async(function getWaiters$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_camareros["default"].findAll());

        case 3:
          camareros = _context2.sent;
          res.json({
            data: camareros
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

function getOneWaiter(req, res) {
  var id, camarero;
  return regeneratorRuntime.async(function getOneWaiter$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id;
          _context3.next = 4;
          return regeneratorRuntime.awrap(_camareros["default"].findOne({
            where: {
              idcamarero: id
            }
          }));

        case 4:
          camarero = _context3.sent;
          res.json({
            data: camarero
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

function deleteOneWaiter(req, res) {
  var id, deletedWaiterRows;
  return regeneratorRuntime.async(function deleteOneWaiter$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _context4.next = 4;
          return regeneratorRuntime.awrap(_camareros["default"].destroy({
            where: {
              idcamarero: id
            }
          }));

        case 4:
          deletedWaiterRows = _context4.sent;
          res.json({
            message: 'Deleted client',
            count: deletedWaiterRows
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

function updateOneWaiter(req, res) {
  var id, _req$body2, nombre, apellido1, apellido2, contraseña, email, camarero;

  return regeneratorRuntime.async(function updateOneWaiter$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          id = req.params.id;
          _req$body2 = req.body, nombre = _req$body2.nombre, apellido1 = _req$body2.apellido1, apellido2 = _req$body2.apellido2, contraseña = _req$body2.contraseña, email = _req$body2.email;
          _context6.next = 5;
          return regeneratorRuntime.awrap(_camareros["default"].findAll({
            attributes: ['idcamarero', 'nombre', 'apellido1', 'apellido2', 'contraseña', 'email'],
            where: {
              idcamarero: id
            }
          }));

        case 5:
          camarero = _context6.sent;

          if (camarero.length > 0) {
            camarero.forEach(function _callee(camarero) {
              return regeneratorRuntime.async(function _callee$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return regeneratorRuntime.awrap(camarero.update({
                        nombre: nombre,
                        apellido1: apellido1,
                        apellido2: apellido2,
                        contraseña: contraseña,
                        email: email
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
            message: 'Waiter updated!',
            data: camarero
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