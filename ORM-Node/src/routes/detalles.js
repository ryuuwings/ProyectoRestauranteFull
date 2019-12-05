import { Router} from 'express';
import { createDetails, getDetails, getOneDetail, deleteOneDetail, updateOneDetail, getDetailsByBill, getDetailsByProduct } from '../controllers/detalles.controller';
const router = Router();

//api/detalles
router.post('/', createDetails);
router.get('/', getDetails);
//api/detalles/:id
router.get('/:id', getOneDetail);
router.delete('/:id', deleteOneDetail);
router.put('/:id', updateOneDetail);

//api/detalles/facturas/:idfactura
router.get('/facturas/:facturaidfactura', getDetailsByBill);
//api/detalles/productos/:idproducto
router.get('/productos/:platoidplato', getDetailsByProduct);

export default router;