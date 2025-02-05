import { Router } from 'express';
import { getKPI } from '../controllers/kpiController.js';
import { paginationMiddleware } from '../middleware/paginationMiddeware.js';

const router = Router();

router.get('/', paginationMiddleware, getKPI);

export default router;
