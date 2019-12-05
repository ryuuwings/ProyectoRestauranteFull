import Sequelize from 'sequelize';
import { sequelize } from'../database/database';
import Detalles from './detalles';

const Facturas = sequelize.define('factura',{
    idfactura: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    clienteidcliente: {
        type: Sequelize.INTEGER
    },
    mesaidmesa: {
        type: Sequelize.INTEGER
    },
    fechafactura: {
        type: Sequelize.DATE
    },
    camareroidcamarero: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false,
    freezeTableName: true
});
Facturas.hasMany(Detalles, {foreignKey: 'facturaidfactura', sourceKey:'idfactura'});
Detalles.belongsTo(Facturas, {foreignKey: 'facturaidfactura', sourceKey:'idfactura'});
export default Facturas;