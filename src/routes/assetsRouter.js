import { Router } from 'express';
import { getAssets } from '../controllers/assetsController.js';
import { paginationMiddleware } from '../middleware/paginationMiddeware.js';

const router = Router();

router.get('/', paginationMiddleware, getAssets);

export default router;
