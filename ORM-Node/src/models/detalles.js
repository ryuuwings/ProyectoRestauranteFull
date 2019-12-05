import Sequelize from 'sequelize';
import { sequelize } from'../database/database';

const Detalles = sequelize.define('detallesfactura',{
    iddetalles: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    facturaidfactura: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    platoidplato: {
        type: Sequelize.INTEGER
    },
    nota: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false,
    freezeTableName: true
});

export default Detalles;