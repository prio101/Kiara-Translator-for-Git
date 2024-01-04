import express from 'express';
const router = express.Router();
import { getDashboard, 
         getAction, 
         getSetting, 
         createSetting, 
         getSettingList } from '../controllers/admin/adminController.js';

// Define routes for the Github Application
router.get('/dashboard', getDashboard)
router.get('/settings', getSettingList)
router.get('/settings/new', getSetting)
router.post('/settings/create', createSetting)
router.get('/actions/new', getAction)



import { getSync, postSeed } from '../controllers/adminController.js';

// Define routes for the Github Application
router.get('/sync', getSync);
router.post('/seed', postSeed);

export default router;
