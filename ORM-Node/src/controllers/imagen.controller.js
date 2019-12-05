import Imagenes from '../models/imagenes'

export async function createImage(req, res) {
    const { ruta } = req.body;
    try {
        let newImagen = await Imagenes.create({
            ruta: ruta
        }, {
            fields: ['ruta']
        });
        if (newMesa) {
            return res.json({
                message: 'Image registered',
                data: newImagen
            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something went wrong, image not registered',
            data: {}
        });
    }

}

export async function getImages(req, res) {
    try {
        const imagenes = await Imagenes.findAll();
        res.json({
            data: imagenes
        });
    } catch (error) {

    }
}

export async function getOneImage(req, res) {
    try {
        const { id } = req.params;
        const imagen = await Imagenes.findOne({
            where: {
                idimagen: id
            }
        });
        res.json({
            data: imagen
        })
    } catch (error) {

    }
}

export async function deleteOneImage(req, res) {
    try {
        const { id } = req.params;
        const deletedImageRows = await Imagenes.destroy({
            where: {
                idimagen: id
            }
        });
        res.json({
            message: 'Deleted image',
            count: deletedImageRows
        })
    } catch (error) {

    }
}

export async function updateOneImage(req, res) {
    try {
        const { id } = req.params;
        const { ruta } = req.body;

        const imagen = await Imagenes.findAll({
            attributes: ['idimagen','ruta'],
            where: {
                idimagen: id
            }
        });

        if(imagen.length > 0){
            imagen.forEach(async imagen =>{
                await imagen.update({
                    ruta: ruta
                });
            })
        }
        return res.json({
            message: 'Image updated!',
            data: imagen
        })
    } catch (error) {

    }
}