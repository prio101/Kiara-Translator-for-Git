import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import expressLayouts from 'express-ejs-layouts';
import path from 'path';
import FetchPrData from './services/Github/FetchPrData/fetchPrData.js';
import FetchIssuesData from './services/Github/FetchPrData/fetchIssuesData.js';
// init the configuration environment
dotenv.config();

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressLayouts);

app.set('view engine', 'ejs');


import openaiRoutes from './routes/openaiRoutes.js';
import githubRoutes from './routes/githubRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
export const completionUrl = process.env.COMPLETION_URL || 'https://api.openai.com/v1/engines/davinci/completions';
export const model = process.env.MODEL || 'gpt-3.5-turbo';
export const secret = process.env.OPEN_API_KEY;
export const github_user_token = process.env.GITHUB_USER_TOKEN;
export const github_base_url = process.env.GITHUB_BASE_URL || 'https://api.github.com';
export const github_api_version = process.env.GITHUB_API_VERSION || '2022-11-28';

// Github API headers specific for the load
export const headersLoad = {
  'Content-Type': 'application/json',
  'Accept': 'application/vnd.github.v3+json',
  'Authorization': `Bearer ${github_user_token}`,
  'X-Github-Api-Version': github_api_version
}

// Use routes
app.use('/api', openaiRoutes);
app.use('/api/github', githubRoutes);
app.use('/web/admin', adminRoutes);


// Set up the Express app to listen on a specific port
const port = process.env.PORT || 3000;


// Initialize the database connection
// export const sequelize = new Sequelize('','' ,'', {
//   dialect: 'sqlite',
//   storage: path.resolve('db', 'database.sqlite'),
//   logging: (...msg) => console.log(msg)
// })

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);

  // try {
  //   await sequelize.authenticate();
  //   console.log('Connection has been established successfully, to the database.');
  // } catch (error) {
  //   console.error('Unable to connect to the database:', error);
  // }
  // let fetchPrData = new FetchPrData();
  // fetchPrData.call('prio101', 'chapakhana', { state: 'open' });

  // to test out issues
  let issuesService = new FetchIssuesData();
  // chapakhana
  // setInterval(() => {
  //   issuesService.call({ owner: 'prio101', repo: 'translation-check', query: { state: 'open' } });
  // }, 30000)
   
  
  // Kiara Unversity
  // issuesService.call({ owner: 'daijapan', repo: 'kiara-university', query: { state: 'open' } });
});
