import express from 'express';
const router = express.Router();

import { getSync, postSeed } from '../controllers/adminController.js';

// Define routes for the Github Application
router.get('/sync', getSync);
router.post('/seed', postSeed);

export default router;
