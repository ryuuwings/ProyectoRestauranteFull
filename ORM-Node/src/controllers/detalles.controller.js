import Detalles from '../models/detalles'

export async function createDetails(req, res) {
    const { facturaidfactura, platoidplato, nota } = req.body;
    try {
        let newDetalle = await Detalles.create({
            facturaidfactura: facturaidfactura,
            platoidplato: platoidplato,
            nota: nota
        }, {
            fields: ['facturaidfactura', 'platoidplato', 'nota']
        });
        if (newDetalle) {
            return res.json({
                message: 'Detail registered',
                data: newDetalle
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

export async function getDetails(req, res) {
    try {
        const detalles = await Detalles.findAll();
        res.json({
            data: detalles
        });
    } catch (error) {

    }
}

export async function getOneDetail(req, res) {
    try {
        const { id } = req.params;
        const detalle = await Detalles.findOne({
            where: {
                iddetalles: id
            }
        });
        res.json({
            data: detalle
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something went wrong, product not registered',
            data: {}
        });
    }
}

export async function deleteOneDetail(req, res) {
    try {
        const { id } = req.params;
        const deletedDetailRows = await Detalles.destroy({
            where: {
                iddetalles: id
            }
        });
        res.json({
            message: 'Deleted detail',
            count: deletedDetailRows
        })
    } catch (error) {

    }
}

export async function updateOneDetail(req, res) {
    try {
        const { id } = req.params;
        const { facturaidfactura, platoidplato, nota } = req.body;

        const detalle = await Detalles.findAll({
            attributes: ['iddetalles', 'facturaidfactura', 'platoidplato', 'nota'],
            where: {
                iddetalles: id
            }
        });

        if (detalle.length > 0) {
            detalle.forEach(async detalle => {
                await detalle.update({
                    facturaidfactura: facturaidfactura,
                    platoidplato: platoidplato,
                    nota: nota
                });
            })
        }
        return res.json({
            message: 'Detail updated!',
            data: detalle
        })
    } catch (error) {

    }
}

export async function getDetailsByBill(req, res) {
    const { facturaidfactura } = req.params;
    const detalles = await Detalles.findAll({
        attributes: ['iddetalles', 'facturaidfactura', 'platoidplato', 'nota'],
        where: { facturaidfactura }
    });
    res.json({ detalles });
}

export async function getDetailsByProduct(req, res) {
    const { platoidplato } = req.params;
    const detalles = await Detalles.findAll({
        attributes: ['iddetalles', 'facturaidfactura', 'platoidplato', 'nota'],
        where: { platoidplato }
    });
    res.json({ detalles });
}