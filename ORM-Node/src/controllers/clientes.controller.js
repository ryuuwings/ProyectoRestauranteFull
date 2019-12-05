import Clientes from '../models/clientes'

export async function createClient(req, res) {
    const { nombre, apellido1, apellido2 } = req.body;
    try {
        let newClient = await Clientes.create({
            nombre: nombre,
            apellido1: apellido1,
            apellido2: apellido2
        }, {
            fields: ['nombre', 'apellido1', 'apellido2']
        });
        if (newClient) {
            return res.json({
                message: 'Client registered',
                data: newClient
            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something went wrong, client not registered',
            data: {}
        });
    }

}

export async function getClients(req, res) {
    try {
        const clientes = await Clientes.findAll();
        res.json({
            data: clientes
        });
    } catch (error) {

    }
}

export async function getOneClient(req, res) {
    try {
        const { id } = req.params;
        const cliente = await Clientes.findOne({
            where: {
                idcliente: id
            }
        });
        res.json({
            data: cliente
        })
    } catch (error) {

    }
}

export async function deleteOneClient(req, res) {
    try {
        const { id } = req.params;
        const deletedClientRows = await Clientes.destroy({
            where: {
                idcliente: id
            }
        });
        res.json({
            message: 'Deleted client',
            count: deletedClientRows
        })
    } catch (error) {

    }
}

export async function updateOneClient(req, res) {
    try {
        const { id } = req.params;
        const { nombre, apellido1, apellido2 } = req.body;

        const cliente = await Clientes.findAll({
            attributes: ['idcliente','nombre', 'apellido1', 'apellido2'],
            where: {
                idcliente: id
            }
        });

        if(cliente.length > 0){
            cliente.forEach(async cliente =>{
                await cliente.update({
                    nombre: nombre,
                    apellido1: apellido1,
                    apellido2: apellido2
                });
            })
        }
        return res.json({
            message: 'Client updated!',
            data: cliente
        })
    } catch (error) {

    }
}