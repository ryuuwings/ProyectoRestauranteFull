import { Router} from 'express';
import { getWaiters, createWaiter, getOneWaiter, deleteOneWaiter, updateOneWaiter } from '../controllers/camarero.controller';
const router = Router();


// /api/camareros/
router.get('/', getWaiters);
router.post('/', createWaiter);

// /api/camareros/:id
router.get('/:id', getOneWaiter);
router.delete('/:id', deleteOneWaiter);
router.put('/:id', updateOneWaiter);

export default router;