import express from 'express';
const router = express.Router();
import { signIn, getListOfRepos, getListOfPRs, getListOfIssues } from '../controllers/githubController.js';

// Define routes for the Github Application
router.get('/signin', signIn);
router.post('/list-of-repos', getListOfRepos);
router.post('/list-of-prs', getListOfPRs);
router.post('/list-of-issues', getListOfIssues);
export default router;
