import { Router} from 'express';
import { getBillsByClient, getBillsByTable, getBillsByWaiter, createBill, getBills, getOneBill, deleteOneBill, updateOneBill } from '../controllers/facturas.controller';
const router = Router();

//api/facturas
router.post('/', createBill);
router.get('/', getBills);

//api/facturas/:id
router.get('/:id', getOneBill);
router.delete('/:id', deleteOneBill);
router.put('/:id', updateOneBill);

//api/facturas/clientes/:clienteidcliente
router.get('/clientes/:clienteidcliente', getBillsByClient);
//api/facturas/mesas/:mesaidmesa
router.get('/mesas/:mesaidmesa', getBillsByTable);
//api/facturas/camareros/:camareroidcamarero
router.get('/camareros/:camareroidcamarero', getBillsByWaiter);

export default router;