import express from 'express';
const router = express.Router();

import { getSync } from '../controllers/adminController.js';

// Define routes for the Github Application
router.get('/sync', getSync);

export default router;
