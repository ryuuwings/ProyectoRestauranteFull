import Productos from '../models/productos'

export async function createProduct(req, res) {
    const { tamaño, nombreplato, alérgenos, descripcion, infonutricional, precio, tipo, imagenidimagen } = req.body;
    try {
        let newProducto = await Productos.create({
            tamaño: tamaño,
            nombreplato: nombreplato,
            alérgenos: alérgenos,
            descripcion: descripcion,
            infonutricional: infonutricional,
            precio: precio,
            tipo: tipo,
            imagenidimagen: imagenidimagen
        }, {
            fields: ['tamaño', 'nombreplato', 'alérgenos', 'descripcion', 'infonutricional', 'precio', 'tipo', 'imagenidimagen']
        });
        if (newProducto) {
            return res.json({
                message: 'Product registered',
                data: newProducto
            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something went wrong, product not registered',
            data: {}
        });
    }

}

export async function getProducts(req, res) {
    try {
        const productos = await Productos.findAll();
        res.json({
            data: productos
        });
    } catch (error) {

    }
}

export async function getOneProduct(req, res) {
    try {
        const { id } = req.params;
        const producto = await Productos.findOne({
            where: {
                idplato: id
            }
        });
        res.json({
            data: producto
        })
    } catch (error) {

    }
}

export async function deleteOneProduct(req, res) {
    try {
        const { id } = req.params;
        const deletedProductRows = await Productos.destroy({
            where: {
                idplato: id
            }
        });
        res.json({
            message: 'Deleted product',
            count: deletedProductRows
        })
    } catch (error) {

    }
}

export async function updateOneProduct(req, res) {
    try {
        const { id } = req.params;
        const { tamaño, nombreplato, alérgenos, descripcion, infonutricional, precio, tipo, imagenidimagen } = req.body;

        const producto = await Productos.findAll({
            attributes: ['idplato', 'tamaño', 'nombreplato', 'alérgenos', 'descripcion', 'infonutricional', 'precio', 'tipo', 'imagenidimagen'],
            where: {
                idplato: id
            }
        });

        if (producto.length > 0) {
            producto.forEach(async producto => {
                await producto.update({
                    tamaño: tamaño,
                    nombreplato: nombreplato,
                    alérgenos: alérgenos,
                    descripcion: descripcion,
                    infonutricional: infonutricional,
                    precio: precio,
                    tipo: tipo,
                    imagenidimagen: imagenidimagen
                });
            })
        }
        return res.json({
            message: 'Table updated!',
            data: producto
        })
    } catch (error) {

    }
}