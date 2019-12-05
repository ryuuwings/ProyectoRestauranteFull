import { Router} from 'express';
import { createClient, getClients, getOneClient, deleteOneClient, updateOneClient } from '../controllers/clientes.controller'
const router = Router();

// /api/clientes/
router.get('/', getClients);
router.post('/', createClient);

// /api/clientes/:id
router.get('/:id', getOneClient);
router.delete('/:id', deleteOneClient);
router.put('/:id', updateOneClient);

export default router;