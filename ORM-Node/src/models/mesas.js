import Sequelize from 'sequelize';
import { sequelize } from'../database/database';

import Facturas from './facturas';

const Mesas = sequelize.define('mesa',{
    idmesa: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    ubicacion: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false,
    freezeTableName: true
});

Mesas.hasMany(Facturas, { foreignKey: 'mesaidmesa', sourceKey: 'idmesa'});
Facturas.belongsTo(Mesas, { foreignKey: 'mesaidmesa', sourceKey: 'idmesa'});
export default Mesas;