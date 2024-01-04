import express from 'express';
const router = express.Router();

import { getHome } from '../controllers/homeController.js';

// Define routes for the OpenAI resource
router.get('/', getHome);

export default router;
