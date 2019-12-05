import Mesas from '../models/mesas'

export async function createTable(req, res) {
    const { ubicacion } = req.body;
    try {
        let newMesa = await Mesas.create({
            ubicacion: ubicacion
        }, {
            fields: ['ubicacion']
        });
        if (newMesa) {
            return res.json({
                message: 'Table registered',
                data: newMesa
            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something went wrong, table not registered',
            data: {}
        });
    }

}

export async function getTables(req, res) {
    try {
        const mesas = await Mesas.findAll();
        res.json({
            data: mesas
        });
    } catch (error) {

    }
}

export async function getOneTable(req, res) {
    try {
        const { id } = req.params;
        const mesa = await Mesas.findOne({
            where: {
                idmesa: id
            }
        });
        res.json({
            data: mesa
        })
    } catch (error) {

    }
}

export async function deleteOneTable(req, res) {
    try {
        const { id } = req.params;
        const deletedTableRows = await Mesas.destroy({
            where: {
                idmesa: id
            }
        });
        res.json({
            message: 'Deleted client',
            count: deletedTableRows
        })
    } catch (error) {

    }
}

export async function updateOneTable(req, res) {
    try {
        const { id } = req.params;
        const { ubicacion } = req.body;

        const mesa = await Mesas.findAll({
            attributes: ['idmesa','ubicacion'],
            where: {
                idmesa: id
            }
        });

        if(mesa.length > 0){
            mesa.forEach(async mesa =>{
                await mesa.update({
                    ubicacion: ubicacion
                });
            })
        }
        return res.json({
            message: 'Table updated!',
            data: mesa
        })
    } catch (error) {

    }
}