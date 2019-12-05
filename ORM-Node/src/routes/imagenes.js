import { Router} from 'express';
import { getOneImage, deleteOneImage, updateOneImage, createImage, getImages } from '../controllers/imagen.controller';
const router = Router();

//api/imagenes
router.post('/', createImage);
router.get('/', getImages);

//api/imagenes/:id
router.get('/:id', getOneImage);
router.delete('/:id', deleteOneImage);
router.put('/:id', updateOneImage);

export default router;