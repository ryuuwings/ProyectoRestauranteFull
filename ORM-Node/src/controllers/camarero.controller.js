import Camareros from '../models/camareros'

export async function createWaiter(req, res) {
    const { nombre, apellido1, apellido2, contraseña, email } = req.body;
    try {
        let newCamarero = await Camareros.create({
            nombre: nombre,
            apellido1: apellido1,
            apellido2: apellido2,
            contraseña: contraseña,
            email: email
        }, {
            fields: ['nombre', 'apellido1', 'apellido2', 'contraseña', 'email']
        });
        if (newCamarero) {
            return res.json({
                message: 'Waiter registered',
                data: newCamarero
            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something went wrong, waiter not registered',
            data: {}
        });
    }

}

export async function getWaiters(req, res) {
    try {
        const camareros = await Camareros.findAll();
        res.json({
            data: camareros
        });
    } catch (error) {

    }
}

export async function getOneWaiter(req, res) {
    try {
        const { id } = req.params;
        const camarero = await Camareros.findOne({
            where: {
                idcamarero: id
            }
        });
        res.json({
            data: camarero
        })
    } catch (error) {

    }
}

export async function deleteOneWaiter(req, res) {
    try {
        const { id } = req.params;
        const deletedWaiterRows = await Camareros.destroy({
            where: {
                idcamarero: id
            }
        });
        res.json({
            message: 'Deleted client',
            count: deletedWaiterRows
        })
    } catch (error) {

    }
}

export async function updateOneWaiter(req, res) {
    try {
        const { id } = req.params;
        const { nombre, apellido1, apellido2, contraseña, email } = req.body;

        const camarero = await Camareros.findAll({
            attributes: ['idcamarero','nombre', 'apellido1', 'apellido2', 'contraseña', 'email'],
            where: {
                idcamarero: id
            }
        });

        if(camarero.length > 0){
            camarero.forEach(async camarero =>{
                await camarero.update({
                    nombre: nombre,
                    apellido1: apellido1,
                    apellido2: apellido2,
                    contraseña: contraseña,
                    email: email
                });
            })
        }
        return res.json({
            message: 'Waiter updated!',
            data: camarero
        })
    } catch (error) {

    }
}