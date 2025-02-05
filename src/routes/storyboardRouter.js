import { Router } from 'express';
import { getStoryboard } from '../controllers/storyboardController.js';
import { paginationMiddleware } from '../middleware/paginationMiddeware.js';

const router = Router();

router.get('/', paginationMiddleware, getStoryboard);

export default router;
