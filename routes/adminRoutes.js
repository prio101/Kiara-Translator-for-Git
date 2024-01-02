import express from 'express';
const router = express.Router();
import { getDashboard } from '../controllers/admin/adminController.js';

// Define routes for the Github Application
router.get('/dashboard', getDashboard)



export default router;
