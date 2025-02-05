import express from 'express';
import { getLibrary } from '../controllers/libraryItemController.js';

const router = express.Router();

router.get('/', getLibrary);

export default router;
