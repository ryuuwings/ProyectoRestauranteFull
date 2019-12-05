import Sequelize from 'sequelize';
import { sequelize } from'../database/database';
import Facturas from './facturas';

const Camareros = sequelize.define('camarero',{
    idcamarero: {
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
    },
    contraseña: {
        type: Sequelize.TEXT
    },
    email: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false,
    freezeTableName: true
});

Camareros.hasMany(Facturas, {foreignKey: 'camareroidcamareo', sourceKey:'idcamarero'});
Facturas.belongsTo(Camareros, {foreignKey: 'camareroidcamareo', sourceKey:'idcamarero'})
export default Camareros;