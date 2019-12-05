import Sequelize from 'sequelize';
import { sequelize } from'../database/database';
import Productos from './productos';

const Imagenes = sequelize.define('imagen',{
    idimagen: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    ruta: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false,
    freezeTableName: true
});

Imagenes.hasMany(Productos, {foreignKey: 'imagenidimagen', sourceKey:'idimagen'});
Productos.belongsTo(Imagenes, {foreignKey: 'imagenidimagen', sourceKey:'idimagen'})
export default Imagenes;