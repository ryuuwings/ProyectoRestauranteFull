import Sequelize from 'sequelize';
import { sequelize } from'../database/database';
import Detalles from './detalles';

const Productos = sequelize.define('producto',{
    idplato: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    tamaño: {
        type: Sequelize.TEXT
    },
    nombreplato: {
        type: Sequelize.TEXT
    },
    alérgenos: {
        type: Sequelize.TEXT
    },
    descripcion: {
        type: Sequelize.TEXT
    },
    infonutricional: {
        type: Sequelize.TEXT
    },
    precio: {
        type: Sequelize.REAL
    },
    tipo: {
        type: Sequelize.TEXT
    },
    imagenidimagen: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false,
    freezeTableName: true
});

Productos.hasMany(Detalles, {foreignKey: 'platoidplato', sourceKey:'idplato'});
Detalles.belongsTo(Productos, {foreignKey: 'platoidplato', sourceKey:'idplato'});
export default Productos;