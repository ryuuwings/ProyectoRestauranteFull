import { Router} from 'express';
import { getTables, createTable, getOneTable, deleteOneTable, updateOneTable } from '../controllers/mesas.controller';
const router = Router();

// /api/mesas
router.get('/', getTables);
router.post('/', createTable);

// /api/mesas/:id
router.get('/:id', getOneTable);
router.delete('/:id', deleteOneTable);
router.put('/:id', updateOneTable);

export default router;