import Facturas from '../models/facturas'

export async function createBill(req, res) {
    const { clienteidcliente, mesaidmesa, fechafactura, camareroidcamarero } = req.body;
    try {
        let newFactura = await Facturas.create({
            clienteidcliente: clienteidcliente,
            mesaidmesa: mesaidmesa,
            fechafactura: fechafactura,
            camareroidcamarero: camareroidcamarero
        }, {
            fields: ['clienteidcliente', 'mesaidmesa', 'fechafactura', 'camareroidcamarero']
        });
        if (newFactura) {
            return res.json({
                message: 'Bill registered',
                data: newFactura
            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something went wrong, bill not registered',
            data: {}
        });
    }

}

export async function getBills(req, res) {
    try {
        const bills = await Facturas.findAll({
            attributes: ['idfactura', 'clienteidcliente', 'mesaidmesa', 'fechafactura', 'camareroidcamarero']
        });
        res.json({ bills });
    } catch (error) {

    }


}

export async function getOneBill(req, res) {
    try {
        const { id } = req.params;
        const factura = await Facturas.findOne({
            attributes: ['idfactura', 'clienteidcliente', 'mesaidmesa', 'fechafactura', 'camareroidcamarero'],
            where: {
                idfactura: id
            }
        });
        res.json({
            data: factura
        })
    } catch (error) {

    }
}

export async function deleteOneBill(req, res) {
    try {
        const { id } = req.params;
        const deletedBillRows = await Facturas.destroy({
            where: {
                idfactura: id
            }
        });
        res.json({
            message: 'Deleted bill',
            count: deletedBillRows
        })
    } catch (error) {

    }
}

export async function updateOneBill(req, res) {
    try {
        const { id } = req.params;
        const { clienteidcliente, mesaidmesa, fechafactura, camareroidcamarero } = req.body;

        const factura = await Facturas.findAll({
            attributes: ['idfactura', 'clienteidcliente', 'mesaidmesa', 'fechafactura', 'camareroidcamarero'],
            where: {
                idfactura: id
            }
        });
        console.log(factura);
        if (factura.length > 0) {
            factura.forEach(async factura => {
                await factura.update({
                    clienteidcliente: clienteidcliente,
                    mesaidmesa: mesaidmesa,
                    fechafactura: fechafactura,
                    camareroidcamarero: camareroidcamarero
                });
            })
        }
        return res.json({
            message: 'Table updated!',
            data: factura
        })
    } catch (error) {

    }
}

export async function getBillsByClient(req, res) {
    const { clienteidcliente } = req.params;
    const facturas = await Facturas.findAll({
        attributes: ['idfactura', 'clienteidcliente', 'mesaidmesa', 'fechafactura', 'camareroidcamarero'],
        where: { clienteidcliente }
    });
    res.json({ facturas });
}

export async function getBillsByTable(req, res) {
    const { mesaidmesa } = req.params;
    const facturas = await Facturas.findAll({
        attributes: ['idfactura', 'clienteidcliente', 'mesaidmesa', 'fechafactura', 'camareroidcamarero'],
        where: { mesaidmesa }
    });
    res.json({ facturas });
}

export async function getBillsByWaiter(req, res) {
    const { camareroidcamarero } = req.params;
    const facturas = await Facturas.findAll({
        attributes: ['idfactura', 'clienteidcliente', 'mesaidmesa', 'fechafactura', 'camareroidcamarero'],
        where: { camareroidcamarero }
    });
    res.json({ facturas });
}