import Sequelize from 'sequelize';
import { sequelize } from'../database/database';
import Facturas from './facturas';

const Clientes = sequelize.define('cliente',{
    idcliente: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.TEXT
    },
    apellido1: {
        type: Sequelize.TEXT
    },
    apellido2: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false,
    freezeTableName: true
});

Clientes.hasMany(Facturas, {foreignKey: 'clienteidcliente', sourceKey:'idcliente'});
Facturas.belongsTo(Clientes, {foreignKey: 'clienteidcliente', sourceKey:'idcliente'})
export default Clientes;