"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTable = createTable;
exports.getTables = getTables;
exports.getOneTable = getOneTable;
exports.deleteOneTable = deleteOneTable;
exports.updateOneTable = updateOneTable;

var _mesas = _interopRequireDefault(require("../models/mesas"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createTable(req, res) {
  var ubicacion, newMesa;
  return regeneratorRuntime.async(function createTable$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          ubicacion = req.body.ubicacion;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(_mesas["default"].create({
            ubicacion: ubicacion
          }, {
            fields: ['ubicacion']
          }));

        case 4:
          newMesa = _context.sent;

          if (!newMesa) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", res.json({
            message: 'Table registered',
            data: newMesa
          }));

        case 7:
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);
          res.status(500).json({
            message: 'Something went wrong, table not registered',
            data: {}
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 9]]);
}

function getTables(req, res) {
  var mesas;
  return regeneratorRuntime.async(function getTables$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_mesas["default"].findAll());

        case 3:
          mesas = _context2.sent;
          res.json({
            data: mesas
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

function getOneTable(req, res) {
  var id, mesa;
  return regeneratorRuntime.async(function getOneTable$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id;
          _context3.next = 4;
          return regeneratorRuntime.awrap(_mesas["default"].findOne({
            where: {
              idmesa: id
            }
          }));

        case 4:
          mesa = _context3.sent;
          res.json({
            data: mesa
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

function deleteOneTable(req, res) {
  var id, deletedTableRows;
  return regeneratorRuntime.async(function deleteOneTable$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _context4.next = 4;
          return regeneratorRuntime.awrap(_mesas["default"].destroy({
            where: {
              idmesa: id
            }
          }));

        case 4:
          deletedTableRows = _context4.sent;
          res.json({
            message: 'Deleted client',
            count: deletedTableRows
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

function updateOneTable(req, res) {
  var id, ubicacion, mesa;
  return regeneratorRuntime.async(function updateOneTable$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          id = req.params.id;
          ubicacion = req.body.ubicacion;
          _context6.next = 5;
          return regeneratorRuntime.awrap(_mesas["default"].findAll({
            attributes: ['idmesa', 'ubicacion'],
            where: {
              idmesa: id
            }
          }));

        case 5:
          mesa = _context6.sent;

          if (mesa.length > 0) {
            mesa.forEach(function _callee(mesa) {
              return regeneratorRuntime.async(function _callee$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return regeneratorRuntime.awrap(mesa.update({
                        ubicacion: ubicacion
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
            data: mesa
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