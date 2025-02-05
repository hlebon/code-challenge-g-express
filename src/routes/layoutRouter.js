import { Router } from 'express';
import { getLayout } from '../controllers/layoutController.js';
import { paginationMiddleware } from '../middleware/paginationMiddeware.js';

const router = Router();

router.get('/', paginationMiddleware, getLayout);

export default router;
