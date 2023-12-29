import express from 'express';
const router = express.Router();
import { signIn } from '../controllers/githubController.js';

// Define routes for the Github Application
router.get('/signin', signIn);

export default router;
