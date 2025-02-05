import { Router } from 'express';
import { getDataViz } from '../controllers/dataVizController.js';
import { paginationMiddleware } from '../middleware/paginationMiddeware.js';

const router = Router();

router.get('/', paginationMiddleware, getDataViz);

export default router;
